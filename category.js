window.OPENSHIFT_CONSTANTS.SAAS_OFFERINGS = [{
  title: "SEBShift",
  icon: "fa fa-dashboard",
  url: "http://sebshift.com",
  description: "SEBShift - it's a shift"
}];

var category = _.find(window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES,
                      { id: 'languages' });
// Add Go as a new subcategory under Languages.
category.subCategories.splice(2,0,{ // Insert at the third spot.
  // Required. Must be unique.
  id: "go",
  // Required.
  label: "Go",
  // Optional. If specified, defines a unique icon for this item.
  icon: "icon-go-gopher",
  // Required. Items matching any tag will appear in this subcategory.
  tags: [
    "go",
    "golang"
  ]
});

window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  id: "sebshift",
  label: "SEBShift",
  subCategories: [
    {
      id: "jenkins",
      label: "jenkins",
      icon: "fa fa-refresh",
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


