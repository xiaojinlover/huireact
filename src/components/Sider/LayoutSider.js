import {Layout,Menu,Icon} from 'antd';
const {Header,Sider,Content} = Layout;
const SubMenu = Menu.SubMenu; 

const LayoutSider=()=>{
	state = {
	collapsed: false,
	mode: 'inline',	
	openKeys: [],
  };

  //自行定义收缩
  toggle=()=>{
	this.setState({ 
	  collapsed:!this.state.collapsed,	
	});	
	this.state.mode = !this.state.collapsed?'vertical' : 'inline';	
	this.state.openKeys = [];
  }
  //关闭其他展开
  onOpenChange = (openKeys) => {
	
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if (latestOpenKey) {
		  nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if (latestCloseKey) {
		  nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		if(!this.state.collapsed)
			this.setState({ openKeys: nextOpenKeys });
		else
			this.setState({ openKeys: openKeys });
	  	}
	  getAncestorKeys = (key) => {
		const map = {
			sub3: [],
		};
		return map[key] || [];

	  }
	 render() {
		  return (
			<Sider		
				collapsed={this.state.collapsed}				
				className={style.sider} 							
			>
			<Icon className={style.toggleicon}		
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
			  style={{color:'#999'}}
              onClick={this.toggle}
            />	
			<Menu 
				mode={this.state.mode} 
				defaultSelectedKeys={['1']}				
				onOpenChange={this.onOpenChange}
				openKeys={this.state.openKeys}
			>
				<Menu.Item key="1">
				  <span>
					<Icon type="home"/>
					<span className="nav-text">首页</span>
				  </span>
				</Menu.Item>
				<SubMenu
				  key="sub1"
				  title={<span><Icon type="user" /><span className="nav-text">人事管理</span></span>}
				>
				  <Menu.Item key="2">员工花名册</Menu.Item>
				  <Menu.Item key="3">公告制度</Menu.Item>              
				</SubMenu>
				<SubMenu
				  key="sub2"
				  title={<span><Icon type="clock-circle-o" /><span className="nav-text">考勤数据</span></span>}
				>
				  <Menu.Item key="4">日考勤数据</Menu.Item>
				  <Menu.Item key="5">考勤数据汇总</Menu.Item>
				</SubMenu> 
				<SubMenu
				  key="sub3"
				  title={<span><Icon type="smile-o" /><span className="nav-text">假勤管理</span></span>}
				>
				  <Menu.Item key="6">假勤审批</Menu.Item>				  
				</SubMenu>
				<SubMenu
				  key="sub4"
				  title={<span><Icon type="inbox" /><span className="nav-text">薪酬管理</span></span>}
				>
				  <Menu.Item key="7">薪酬核算</Menu.Item>
				  <Menu.Item key="8">薪酬数据</Menu.Item>
				</SubMenu>
		
		
				<SubMenu
				  key="sub5"
				  title={<span><Icon type="hdd" /><span className="nav-text">社保公积金</span></span>}
				>
				  <Menu.Item key="9">社保数据</Menu.Item>
				</SubMenu>
				<SubMenu
				  key="sub6"
				  title={<span><Icon type="select" /><span className="nav-text">规则设置</span></span>}
				>
				  <Menu.Item key="10">部门设置</Menu.Item>
				  <Menu.Item key="11">考勤设置</Menu.Item>
				  <Menu.Item key="12">薪酬设置</Menu.Item>
				  <Menu.Item key="13">考勤设置</Menu.Item>
				  <Menu.Item key="14">社保设置</Menu.Item>
				  <Menu.Item key="15">权限设置</Menu.Item>
					
				</SubMenu>
				<SubMenu
				  key="sub7"
				  title={<span><Icon type="compass" /><span className="nav-text">薪酬管理</span></span>}
				>
				  <Menu.Item key="16">薪酬核算</Menu.Item>
				  <Menu.Item key="17">薪酬数据</Menu.Item>
				</SubMenu>
				<SubMenu
				  key="sub8"
				  title={<span><Icon type="skin" /><span className="nav-text">余额管理</span></span>}
				>
				  <Menu.Item key="18">提单管理</Menu.Item>
				  <Menu.Item key="19">余额分配</Menu.Item>
				</SubMenu>
				<Menu.Item key="20">
				  <span>
					<Icon type="global"/>
					<span className="nav-text">增值服务</span>
				  </span>
				</Menu.Item>
			</Menu>
        </Sider>
			  )
	}
}	

export default LayoutSider;