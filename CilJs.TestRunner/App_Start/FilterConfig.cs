﻿using System.Web;
using System.Web.Mvc;

namespace CilJs.TestRunner
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}