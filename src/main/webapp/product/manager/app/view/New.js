Ext.define('manager.view.New', {
	extend:'Ext.window.Window',
	alias:'widget.new',
	title:'新增',
	width:600, 	//不定义大小Window将会自适应
	//height:300,
	modal:true,
	items:[
		{
			xtype:'form',
			id:'newformID',
			layout:'column',
			frame : true, 		//True 为 Panel 填充画面
			autoShow:true,		//创建window自动展现
			//split : true,
			fieldDefaults : {
				xtype:'textfield',
				//labelAlign:'right',
				labelWidth: 60,
				margin : '3 5 3 10',  //上右下左
				columnWidth : 1 / 3
			},
			items:[{
				xtype:'textfield',
				fieldLabel:'姓名',
				name:'name'
			},
			{
				xtype:'textfield',
				fieldLabel:'邮箱',
				name:'email',
				vtype:'email'
			},
			{
				xtype:'textfield',
				fieldLabel:'手机',
				name:'phone'
			},
			{
				xtype:'numberfield',
				fieldLabel:'薪资',
				name:'salary'
			},
			{
				xtype:'datefield',
				fieldLabel:'入职日期',
				name:'inDutyDate'
			}],
			buttonAlign:'center',
			buttons : [{
				text : '保存',
				action : 'save'
			}, {
				text : '取消',
				action : 'cancel'
			}]
			
			
		}
	]
})