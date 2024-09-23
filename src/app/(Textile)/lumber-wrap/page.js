import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Lumber wrap</h2>
        </div>
        <div className="row row-gap-4 bg-light p-4 rounded-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              Lumber ERP (Enterprise Resource Planning) refers to software
              solutions specifically designed for the lumber and wood products
              industry. These systems help businesses manage various processes,
              such as inventory management, order processing, production
              planning, supply chain management, financials, and customer
              relationship management. By integrating these functions, lumber
              ERP systems aim to improve efficiency, reduce costs, and enhance
              decision-making in companies involved in lumber production,
              distribution, and retail.
            </p>

            <h4>Key Features</h4>
            <ol>
                <li>
                    <strong>Inventory Management :- </strong> Tracks raw materials, finished goods, and work-in-progress inventory. Provides real-time visibility into stock levels, helping to minimize excess inventory and avoid stockouts.
                </li>
                <li>
                    <strong>Order Management :- </strong> Automates order processing from quotation to delivery. Manages sales orders, purchase orders, and backorders, ensuring timely fulfillment.
                </li>
                <li>
                    <strong>Production Planning :- </strong> Schedules and tracks production runs based on demand forecasts and available resources. Helps optimize resource allocation, reducing downtime and improving throughput.
                </li>
                <li>
                    <strong>Supply Chain Management :- </strong>  Manages relationships with suppliers and logistics partners. Facilitates procurement processes and monitors supplier performance to ensure quality and delivery reliability.
                </li>
                <li>
                    <strong>Customer Relationship Management (CRM) :- </strong> Manages customer interactions and sales data.Enhances customer service by providing sales representatives with access to order history, preferences, and inquiries.
                </li>
                <li>
                    <strong>Reporting and Analytics :- </strong> Provides data analytics and business intelligence tools to help companies make informed decisions. Generates reports on key performance indicators (KPIs), sales trends, and operational efficiency.
                </li>
            </ol>
          </div>

          <div className="col-lg-4 col-md-5 col-12">
            <img
              src="/assets/images/about/lumber.jpeg"
              alt=""
              className="rounded-3"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
