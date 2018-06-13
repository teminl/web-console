window.OPENSHIFT_CONSTANTS.SAAS_OFFERINGS = [{
  title: "SEBShift",
  icon: "fa fa-dashboard",
  url: "http://sebshift.com",
  description: "SEBShift - it's a shift"
}];

window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  id: "sebshift",
  label: "SEBShift",
  subCategories: [
    {
      id: "jenkins",
      label: "jenkins",
      icon: "icon-wildfly",
      tags: [
        "sebshift",
        "jenkins",
        "wildfly"
      ]
    },
	{
      id: "sebshift",
      label: "SEBShift",
      icon: "icon-go-gopher",
      tags: [
        "sebshift",
        "go",
		"golang"
      ]
    }
  ]
});


