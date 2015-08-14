using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using pizzachef.Areas.Admin.Models;

namespace pizzachef.Areas.Admin.Controllers
{
    public class CatProMenu
    {
        private pizzachefdbEntities db = new pizzachefdbEntities();
        
        public List<String> getCatProName()
        {
            List<String> a = new List<String>();
            IEnumerable<string> query = from d in db.CategoryProducts
                                     select d.CatProName;
            foreach (var kq in query)
            {
                a.Add(kq.ToString());
            }
            return a;
        }

        public IEnumerable<int> getCatProID()
        {
           
            IEnumerable<int> query = from d in db.CategoryProducts select d.CatProID;
            return query;
        }
    }
}