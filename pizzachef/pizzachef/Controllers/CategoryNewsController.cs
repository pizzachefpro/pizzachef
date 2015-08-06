using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using pizzachef.Models;

namespace pizzachef.Controllers
{
    public class CategoryNewsController : Controller
    {
        private pizzachefdbEntities db = new pizzachefdbEntities();

        // GET: /CategoryNews/
        public ActionResult Index()
        {
            return View(db.CategoryNews.ToList());
        }

        // GET: /CategoryNews/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryNew categorynew = db.CategoryNews.Find(id);
            if (categorynew == null)
            {
                return HttpNotFound();
            }
            return View(categorynew);
        }

        // GET: /CategoryNews/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: /CategoryNews/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="CatNewsID,CatNewsName")] CategoryNew categorynew)
        {
            if (ModelState.IsValid)
            {
                db.CategoryNews.Add(categorynew);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(categorynew);
        }

        // GET: /CategoryNews/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryNew categorynew = db.CategoryNews.Find(id);
            if (categorynew == null)
            {
                return HttpNotFound();
            }
            return View(categorynew);
        }

        // POST: /CategoryNews/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="CatNewsID,CatNewsName")] CategoryNew categorynew)
        {
            if (ModelState.IsValid)
            {
                db.Entry(categorynew).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(categorynew);
        }

        // GET: /CategoryNews/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryNew categorynew = db.CategoryNews.Find(id);
            if (categorynew == null)
            {
                return HttpNotFound();
            }
            return View(categorynew);
        }

        // POST: /CategoryNews/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            CategoryNew categorynew = db.CategoryNews.Find(id);
            db.CategoryNews.Remove(categorynew);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
