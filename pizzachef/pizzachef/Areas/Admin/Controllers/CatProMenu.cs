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

        public int getCatProID2(string CatProName)
        {
            List<int> a = new List<int>();
            IEnumerable<int> query = from d in db.CategoryProducts where (CatProName == d.CatProName) select d.CatProID;
            foreach (var kq in query)
            {
                a.Add(kq);
            }
            int i = a[0];
            return i;
        }

    }
}