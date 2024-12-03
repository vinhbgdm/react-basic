import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = (props) => {
    return (
        <div>
            <Sidebar>
                <Menu>
                    <MenuItem> Home page </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem> User </MenuItem>
                        <MenuItem> Quiz </MenuItem>
                        <MenuItem> Câu hỏi </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar