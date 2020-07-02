using System.Web;
using System.Configuration;
using System.Net.Http;
using System;
using System.Web.Mvc;

using System.IO;
using Microsoft.Reporting.WebForms;

namespace Demo.WebApp.Utilities
{
    public static class Report
    {
        public static byte[] GeneraArchivoReporte(string nameReport, string titulo, string tipoArchivo, System.Data.DataSet data)
        {
            byte[] renderedBytes = null;

            LocalReport localReport = new LocalReport();
            String sPath = ObtenerUbicacion();
            localReport.ReportPath = Path.Combine(sPath, "Reportes", nameReport);
            if (data != null)
            {
                foreach (System.Data.DataTable tabla in data.Tables)
                {
                    ReportDataSource reportDS = new ReportDataSource();
                    reportDS.Name = tabla.TableName;
                    reportDS.Value = tabla;
                    localReport.DataSources.Add(reportDS);
                }
            }
            localReport.DisplayName = titulo;
            string tipo = String.Empty;
            switch (tipoArchivo)
            {
                case "xls":
                    tipo = "EXCEL";
                    break;
                case "docx":
                    tipo = "WORDOPENXML";
                    break;
                default:
                    tipo = "PDF";
                    break;
            }
            var reportType = tipo;
            string mimeType;
            string encoding;
            string fileNameExtension;
            string[] streams;
            Warning[] warnings;
            renderedBytes = localReport.Render(reportType, null, out mimeType, out encoding, out fileNameExtension, out streams, out warnings);
            return renderedBytes;
        }

        private static string ObtenerUbicacion()
        {
            String sPath = string.Empty;
            try
            {
                sPath = HttpRuntime.AppDomainAppPath;
            }
            catch (System.Exception)
            {
                sPath = sPath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            }
            return sPath;
        }

        public partial class Cabecera
        {
            public string Usuario { get; set; }
            public string Titulo { get; set; }
            public string Filtros { get; set; }
            public string Subtitulo { get; set; }
        }
    }
}