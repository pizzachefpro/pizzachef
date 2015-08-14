using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using pizzachef.Areas.Admin.Models;

namespace pizzachef.Areas.Admin.Controllers
{
    public class CatNewsMenu
    {
        private pizzachefdbEntities db = new pizzachefdbEntities();

        public List<String> getCatNewsName()
        {
            List<String> a = new List<String>();
            IEnumerable<string> query = from d in db.CategoryNews
                                        select d.CatNewsName;
            foreach (var kq in query)
            {
                a.Add(kq.ToString());
            }
            return a;
        }
    }
}