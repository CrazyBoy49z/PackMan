
TP.grid.SystemSettings = function(config) {
    config = config || {};
	this.sm = new Ext.grid.CheckboxSelectionModel();
	this.ssnamespace = Ext.getCmp('tp-category-name').getValue();
	this.ssuncheckedkeys = [];
    Ext.applyIf(config,{
        id: 'tp-grid-systemsettings'
		,url: MODx.config.connector_url ? MODx.config.connector_url : MODx.config.connectors_url+'system/settings/getList.php'
        ,baseParams: {
            action: MODx.config.connector_url ? 'system/settings/getList' : 'getList'
			,namespace: this.ssnamespace
        }
		,paging: true
        ,fields: ['name_trans','key','value','xtype','area']
		,primaryKey: 'key'
		,sm: this.sm
        ,columns: [this.sm,{
            header: _('packman.systemsetting_name')
            ,dataIndex: 'name_trans'
            ,width: 300
        },{
            header: _('packman.systemsetting_key')
            ,dataIndex: 'key'
            ,width: 250
        },{
            header: _('packman.systemsetting_value')
            ,dataIndex: 'value'
            ,width: 300
        },{
			header: 'xtype'
			,dataIndex: 'xtype'
			,hidden: true
		},{
			header: 'area'
			,dataIndex: 'area'
			,hidden: true
		}]
    });
    TP.grid.SystemSettings.superclass.constructor.call(this,config);
	this.addListener('render',function(){
		this.store.on('load', function(store, records, options){
			var recLen = Ext.getCmp('tp-grid-systemsettings').store.getRange().length;
			var view   = Ext.getCmp('tp-grid-systemsettings').getView();
			var chkdiv = Ext.fly(view.innerHd).child(".x-grid3-hd-checker");
			chkdiv.removeClass("x-grid3-hd-checker-on");
			if (recLen) {			
				Ext.getCmp('tp-grid-systemsettings').getSelectionModel().selectAll();
				// Now uncheck any that were saved unchecked
				Ext.getCmp('tp-grid-systemsettings').setunchecks();
				// retest checked count
				recLen = Ext.getCmp('tp-grid-systemsettings').store.getRange().length;
				if (recLen)chkdiv.addClass("x-grid3-hd-checker-on");
			}   
		}); 
	});
};

Ext.extend(TP.grid.SystemSettings,MODx.grid.Grid,{
    changess: function() {
		var c = Ext.getCmp('tp-category-name').getValue();
		this.getStore().baseParams.namespace = c;
		this.getBottomToolbar().changePage(1);
    }
	,setuncheckedkeyval(d) {
		this.ssuncheckedkeys = d;
	}
	,setunchecks(d) {
		if (!this.ssuncheckedkeys.length) return;
		var sm = this.getSelectionModel();
		srecs = sm.getSelections();
		var unchecks = this.ssuncheckedkeys;
		var rowno = 0;
		Ext.each(srecs, function (item) {
			if (unchecks.indexOf(item.data.key)!== -1) {
				// Uncheck this row
				sm.deselectRow(rowno);
				//console.log('uncheck '+item.data.key);
			}
			rowno +=1;
		});
		this.ssuncheckedkeys = [];
	}
});
Ext.reg('tp-grid-systemsettings',TP.grid.SystemSettings);
