function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	
	 var ga = new GlideAjax('CategoryHelperAjax');
   ga.addParam('sysparm_name','getSubcategories');
	ga.addParam('sysparm_category', g_form.getValue('category'));
   ga.getXML(ajaxProcessor);   
}

function ajaxProcessor(response){

    var answer = response.responseXML.documentElement.getAttribute('answer');
		  var subcategoryList = JSON.parse(answer);          
			
            g_form.clearOptions('subcategory');
            g_form.addOption('subcategory', '', '-- None --');
            for (var i = 0; i < subcategoryList.length; i++) {
                g_form.addOption('subcategory', subcategoryList[i], subcategoryList[i]);
            }

 }
