var _StringUtil = {
    IsEmpty(e) {
        switch (e) {
            case "[]":
            case "":
            case 0:
            case "0":
            case null:
            case "null":
            case false:
            case typeof (e) == "undefined":
                return true;
            default:
                return false;
        }
    }
}
