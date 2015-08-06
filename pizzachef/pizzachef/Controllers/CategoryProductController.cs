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
    public class CategoryProductController : Controller
    {
        private pizzachefdbEntities db = new pizzachefdbEntities();

        // GET: /CategoryProduct/
        public ActionResult Index()
        {
            return View(db.CategoryProducts.ToList());
        }

        // GET: /CategoryProduct/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryProduct categoryproduct = db.CategoryProducts.Find(id);
            if (categoryproduct == null)
            {
                return HttpNotFound();
            }
            return View(categoryproduct);
        }

        // GET: /CategoryProduct/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: /CategoryProduct/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="CatProID,CatProName")] CategoryProduct categoryproduct)
        {
            if (ModelState.IsValid)
            {
                db.CategoryProducts.Add(categoryproduct);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(categoryproduct);
        }

        // GET: /CategoryProduct/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryProduct categoryproduct = db.CategoryProducts.Find(id);
            if (categoryproduct == null)
            {
                return HttpNotFound();
            }
            return View(categoryproduct);
        }

        // POST: /CategoryProduct/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="CatProID,CatProName")] CategoryProduct categoryproduct)
        {
            if (ModelState.IsValid)
            {
                db.Entry(categoryproduct).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(categoryproduct);
        }

        // GET: /CategoryProduct/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoryProduct categoryproduct = db.CategoryProducts.Find(id);
            if (categoryproduct == null)
            {
                return HttpNotFound();
            }
            return View(categoryproduct);
        }

        // POST: /CategoryProduct/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            CategoryProduct categoryproduct = db.CategoryProducts.Find(id);
            db.CategoryProducts.Remove(categoryproduct);
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
