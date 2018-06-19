window.OPENSHIFT_CONSTANTS.SAAS_OFFERINGS = [{
  title: "SEBShift",
  icon: "fa fa-dashboard",
  url: "http://sebshift.com",
  description: "SEBShift - it's a shift"
  }, {
  title: "System Status",
  icon: "fa fa-heartbeat",
  url: "http://example.com/status",
  description: "View system alerts and outages."
  }, {
  title: "Confluence",
  icon: "fa fa-edit",
  url: "https://confluence-general.sebank.se/display/ses",
  description: "Documentation etc"
}];

window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  id: "sebshift",
  label: "SEBShift",
  subCategories: [
    {
      id: "sebshift",
      label: "SEBShift",
      icon: "icon-openshift",
      tags: [
        "sebshift",
        "jenkins",
		"Python",
		"Node.js"
      ]
    }
  ]
});