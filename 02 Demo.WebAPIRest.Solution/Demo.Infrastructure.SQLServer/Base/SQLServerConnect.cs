﻿using System;
using System.Data;
using System.Configuration;

namespace Demo.Infrastructure.SQLServer.Base
{
    class SQLServerConnect
    {
        public static System.Data.SqlClient.SqlConnection cn;
        public static System.Data.SqlClient.SqlCommand Command;

        public static string GetConectionString(string baseContext)
        {
            return ConfigurationManager.ConnectionStrings[baseContext].ConnectionString;
        }

        public static void OpenConection()
        {
            cn = new System.Data.SqlClient.SqlConnection(GetConectionString("TUCNN"));
            Command = new System.Data.SqlClient.SqlCommand();
        }

        public static void CloseConection()
        {
            if (Command != null)
            {
                Command.Dispose();
                Command.Connection.Close();
                Command = null;
            }
            if (cn != null)
            {
                cn.Close();
                cn.Dispose();
                cn = null;
            }
        }

        public static void CreateCommand(string Source, System.Data.CommandType CommandType, params object[] Args)
        {
            Command.CommandText = Source;
            Command.CommandType = CommandType;
            Command.CommandTimeout = 10;
            Command.Parameters.AddRange(Args);
            Command.Connection = cn;
            Command.Connection.Open();
        }

        public static void CreateCommand(string Source, System.Data.CommandType CommandType)
        {
            Command.CommandText = Source;
            Command.CommandType = CommandType;
            Command.CommandTimeout = 10;
            Command.Connection = cn;
            Command.Connection.Open();
        }

        public static System.Data.SqlClient.SqlParameter CreateParameter(string ParameterName, System.Data.ParameterDirection Direction,
            System.Data.SqlDbType SqlDbType, Object Value)
        {
            var SqlParameter = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = string.Concat("@", ParameterName),
                Direction = Direction,
                SqlDbType = SqlDbType,
                Value = Value
            };
            return SqlParameter;
        }

        public static System.Data.SqlClient.SqlParameter CreateParameterOutput(string ParameterName, System.Data.SqlDbType SqlDbType, int Size)
        {
            var SqlParameter = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = string.Concat("@", ParameterName),
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = SqlDbType,
                Size = Size
            };
            return SqlParameter;
        }

        public static System.Data.SqlClient.SqlParameter CreateParameter(string ParameterName, System.Data.SqlDbType SqlDbType, Object Value)
        {
            var SqlParameter = new System.Data.SqlClient.SqlParameter
            {
                ParameterName = string.Concat("@", ParameterName),
                Direction = System.Data.ParameterDirection.Input,
                SqlDbType = SqlDbType,
                Value = Value
            };
            return SqlParameter;
        }

        public static int Execute()
        {
            return Command.ExecuteNonQuery();
        }

        public static object ExecuteScalar()
        {
            return Command.ExecuteScalar();
        }

        public static object GetOutParameter(int Parameter)
        {
            return Command.Parameters[Parameter].Value;
        }

        public static object GetOutParameter(string Parameter)
        {
            return Command.Parameters[string.Concat("@", Parameter)].Value;
        }

        public static System.Data.SqlClient.SqlParameterCollection GetOutParameter()
        {
            return Command.Parameters;
        }

        public static System.Data.SqlClient.SqlDataReader GetDataReader(System.Data.CommandBehavior CommandBehavior)
        {
            return Command.ExecuteReader(CommandBehavior);
        }

        public static System.Data.DataTable GetDataTable()
        {
            var dt = new System.Data.DataTable();
            var da = new System.Data.SqlClient.SqlDataAdapter(Command);
            da.Fill(dt);
            return dt;
        }

        public static System.Data.DataSet GetDataSet()
        {
            var ds = new System.Data.DataSet();
            var da = new System.Data.SqlClient.SqlDataAdapter(Command);
            da.Fill(ds);
            return ds;
        }

    }
}