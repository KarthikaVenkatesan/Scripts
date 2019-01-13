var CategoryHelperAjax = Class.create();
CategoryHelperAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	getSubcategories: function(){
		var subcategoryList = [];
		var cat = this.getParameter('sysparm_category');
		
		var sub = new GlideRecord('sys_choice');		
		sub.addQuery('dependent_value', cat);
		sub.addQuery('name','incident');
		sub.addNotNullQuery('value');		
		sub.query();		
		while (sub.next()) {
		  
			subcategoryList.push(sub.getDisplayValue('value'));			
		}		
		
		return new JSON().encode(subcategoryList);	
		
	},
	
    type: 'CategoryHelperAjax'
});
