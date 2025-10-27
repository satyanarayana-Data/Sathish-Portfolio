// ===== Experience Section Logic =====
function showExp(company) {
  const exp = document.getElementById("exp-details");
  let html = "";

  if (company === "softtech") {
    html = `
      <div class="exp-card">
        <h3>SoftTech Solutions</h3>
        <p><strong>Role:</strong> Data Analyst</p>
        <p>Designed Power BI dashboards and optimized SQL queries to improve reporting efficiency by 30%.</p>
      </div>`;
  } else if (company === "tcs") {
    html = `
      <div class="exp-card">
        <h3>Tata Consultancy Services (TCS)</h3>
        <p><strong>Role:</strong> Business Analyst</p>
        <p>Developed KPI dashboards and automated data collection workflows using Python and Excel macros.</p>
      </div>`;
  } else if (company === "aurobindo") {
    html = `
      <div class="exp-card">
        <h3>Aurobindo Pharma</h3>
        <p><strong>Role:</strong> Data Engineer</p>
        <p>Implemented data pipelines integrating Snowflake and Azure for large-scale analytics.</p>
      </div>`;
  }

  exp.innerHTML = html;
}

// ===== Projects Section Logic =====
function showProj(project) {
  const proj = document.getElementById("proj-details");
  let html = "";

  if (project === "warehouse") {
    html = `
      <div class="proj-card">
        <h3>Data Warehouse Implementation</h3>
        <p>Built a scalable warehouse using Snowflake integrating multiple data sources for analytics.</p>
      </div>`;
  } else if (project === "financial") {
    html = `
      <div class="proj-card">
        <h3>Financial Trends Dashboard</h3>
        <p>Developed Power BI dashboards tracking revenue and forecasting trends using time-series models.</p>
      </div>`;
  } else if (project === "sales") {
    html = `
      <div class="proj-card">
        <h3>Sales and Revenue Analysis</h3>
        <p>Analyzed historical sales data using Python and Excel to identify market opportunities.</p>
      </div>`;
  } else if (project === "modern") {
    html = `
      <div class="proj-card">
        <h3>Sales Data Modernization</h3>
        <p>Migrated legacy data to cloud platforms and improved visualization using Tableau and AWS.</p>
      </div>`;
  }

  proj.innerHTML = html;
}