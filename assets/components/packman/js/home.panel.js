
TP.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        id: 'tp-panel-home'
        ,url: TP.config.connector_url
        ,baseParams: {
            action: 'build'
        }
        ,border: false
        ,baseCls: 'modx-formpanel'
        ,cls: 'container'
        ,fileUpload: true
        ,items: [{
            html: '<h2>'+_('packman')+'</h2>'
            ,border: false
            ,id: 'tp-home-header'
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,border: true
            ,defaults: { border: false ,autoHeight: true }
			,id: 'tp-home-tab'
            ,items: [{
                title: _('packman.package')
                ,draggable: false
                ,layout: 'form'
                ,labelWidth: 200
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.intro_msg')
                    ,border: false
                },{
                    xtype: 'textfield'
                    ,fieldLabel: _('packman.package_name')
                    ,description: _('packman.package_name_desc')
                    ,name: 'category'
                    ,id: 'tp-category-name'
                    ,value: _('packman.mypackage')
                },{
                    xtype: 'textfield'
                    ,inputType: 'file'
                    ,name: 'readme'
                    ,fieldLabel: _('packman.readme')
                    ,description: _('packman.readme_desc')
                    ,width: 300
                },{
                    xtype: 'textfield'
                    ,inputType: 'file'
                    ,name: 'license'
                    ,fieldLabel: _('packman.license')
                    ,description: _('packman.license_desc')
                    ,width: 300
                },{
                    xtype: 'textfield'
                    ,inputType: 'file'
                    ,name: 'changelog'
                    ,fieldLabel: _('packman.changelog')
                    ,description: _('packman.changelog_desc')
                    ,width: 300
                },{
                    xtype: 'textfield'
                    ,name: 'version'
                    ,fieldLabel: _('packman.version')
                    ,description: _('packman.version_desc')
                    ,value: '1.0'
                },{
                    xtype: 'textfield'
                    ,name: 'release'
                    ,fieldLabel: _('packman.release')
                    ,description: _('packman.release_desc')
                    ,value: 'beta1'
                }]
            },{
                title: _('packman.templates')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.templates.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-templates'
                    ,id: 'tp-grid-templates'
                    ,preventRender: true
                }]
            },{
                title: _('packman.chunks')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.chunks.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-chunks'
                    ,id: 'tp-grid-chunks'
                    ,preventRender: true
                }]
            },{
                title: _('packman.snippets_custom')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.snippets.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-snippets'
                    ,id: 'tp-grid-snippets'
                    ,preventRender: true
                }]
            },{
                title: _('packman.plugins')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.plugins.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-plugins'
                    ,id: 'tp-grid-plugins'
                    ,preventRender: true
                }]
            },{
                title: _('packman.subpackages')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.subpackages.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-packages'
                    ,id: 'tp-grid-packages'
                    ,preventRender: true
                }]
            },{
                title: _('packman.directories')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.directories.intro_msg')
                    ,border: false
                },{
                    xtype: 'tp-grid-directories'
                    ,id: 'tp-grid-directories'
                    ,preventRender: true
                }]
            }, {
                title: _('packman.cmpmenu')
                ,draggable: false
                ,layout: 'form'
                ,labelWidth: 200
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.cmpmenu_msg')
                    ,border: false
                },{
            		xtype: 'checkbox'
            		,fieldLabel: _('packman.cmpmenu_include')
					,description: _('packman.cmpmenu_include_desc')
            		,name: 'cmpmenu-include'
					,id: 'tp-cmpmenu-include'
            		,anchor: '100%'
                    ,listeners: {
                        'check': { fn: this.menuincludeFieldMsg, scope: this }
                    }
            	}, {				
                    xtype: 'textfield'
                    ,fieldLabel: _('packman.cmpmenu_name')
                    ,description: _('packman.cmpmenu_name_desc')
                    ,name: 'cmpmenu-name'
                    ,id: 'tp-cmpmenu-name'
                    ,value: ''
                },{
                    xtype: 'textfield'
                    ,name: 'cmpmenu-desc'
					,id: 'tp-cmpmenu-desc'
                    ,fieldLabel: _('packman.cmpmenu_desc')
                    ,description: _('packman.cmpmenu_desc_desc')
                    ,value: ''
                },{
                    xtype: 'textfield'
                    ,name: 'cmpmenu-action'
					,id: 'tp-cmpmenu-action'					
                    ,fieldLabel: _('packman.cmpmenu_action')
                    ,description: _('packman.cmpmenu_action_desc')
                    ,value: ''
                },{
                    xtype: 'textfield'
                    ,name: 'cmpmenu-params'
					,id: 'tp-cmpmenu-params'					
                    ,fieldLabel: _('packman.cmpmenu_params')
                    ,description: _('packman.cmpmenu_params_desc')
                    ,value: ''
                }]
            },{
                title: _('packman.systemsettings')
                ,bodyStyle: 'padding: 15px;'
                ,items: [{
                    html: _('packman.systemsettings.intro_msg')
                    ,border: false
                },{
                    xtype: 'hidden'
                    ,name: 'sscategory'
                    ,id: 'tp-sscategory-name'
					,disabled: true
                    ,value: _('packman.mypackage')
                },{
                    xtype: 'tp-grid-systemsettings'
                    ,id: 'tp-grid-systemsettings'
	            }]
				,listeners: {
					'activate': {fn:this.sscheck,scope:TP}				
				}
            }]
        }]
        ,listeners: {
			'afterrender': {fn:this.setup,scope:this}
            ,'beforeSubmit': {fn:this.beforeSubmit,scope:this}
            ,'success': {fn:this.success,scope:this}
        }
    });
    TP.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(TP.panel.Home,MODx.FormPanel,{
    setup: function(o) {
		var f = Ext.getCmp('tp-cmpmenu-include');
		this.menuincludeFieldMsg(f,f.getValue());
	}
	,beforeSubmit: function(o) {
		// MJB - create array of selected systemsettings
		var arrayList=[];
		selected = Ext.getCmp('tp-grid-systemsettings').getSelectionModel().getSelections();
		Ext.each(selected, function (item) {
			arrayList.push(item.data);                    
		});
        Ext.apply(o.form.baseParams,{
            templates: Ext.getCmp('tp-grid-templates').encode()
            ,chunks: Ext.getCmp('tp-grid-chunks').encode()
            ,snippets: Ext.getCmp('tp-grid-snippets').encode()
            ,plugins: Ext.getCmp('tp-grid-plugins').encode()
            ,packages: Ext.getCmp('tp-grid-packages').encode()
			,directories: Ext.getCmp('tp-grid-directories').encode()
			,systemsettings: Ext.encode(arrayList)	// MJB - only need selected
        });
    }
    ,success: function(o) {
        if (o.result.success) {
            var name = o.result.message;

            Ext.getCmp('tp-btn-export').setDisabled(false);
            Ext.getCmp('tp-grid-templates').getStore().commitChanges();
            Ext.getCmp('tp-grid-chunks').getStore().commitChanges();
            Ext.getCmp('tp-grid-snippets').getStore().commitChanges();
            Ext.getCmp('tp-grid-plugins').getStore().commitChanges();
            Ext.getCmp('tp-grid-packages').getStore().commitChanges();
            Ext.getCmp('tp-grid-directories').getStore().commitChanges();
            Ext.getCmp('tp-grid-systemsettings').getStore().commitChanges();
			
            location.href = TP.config.connector_url+'?action=build&download='+name+'&HTTP_MODAUTH='+MODx.siteId;
        }
    }
	,menuincludeFieldMsg: function (field, checked) {
        var valueField1 = Ext.getCmp('tp-cmpmenu-name');
		var valueField2 = Ext.getCmp('tp-cmpmenu-desc');
		var valueField3 = Ext.getCmp('tp-cmpmenu-action');
		var valueField4 = Ext.getCmp('tp-cmpmenu-params');
        if (checked) {
            valueField1.show();
			valueField2.show();
            valueField3.show();
            valueField4.show();				
        } else {
            valueField1.hide();
            valueField2.hide();			
            valueField3.hide();	
            valueField4.hide();				
        }
    }
	,sscheck: function(o) {
		var c = Ext.getCmp('tp-category-name').getValue();
		if (c == "") c = Ext.getCmp('tp-category-name').setValue(_('packman.mypackage'));
		var ss = Ext.getCmp('tp-sscategory-name').getValue();
		if (ss != c) {
			// reload system settings grid for active category
			Ext.getCmp('tp-grid-systemsettings').changess();
			Ext.getCmp('tp-sscategory-name').setValue(c);
		}
		else {
			// check if store empty & clear select column
			var recLen = Ext.getCmp('tp-grid-systemsettings').store.getRange().length;
			if (recLen == 0) {
				var view   = Ext.getCmp('tp-grid-systemsettings').getView();
				var chkdiv = Ext.fly(view.innerHd).child(".x-grid3-hd-checker")
				chkdiv.removeClass("x-grid3-hd-checker-on");
			}   		
		}
	}
});
Ext.reg('tp-panel-home',TP.panel.Home);