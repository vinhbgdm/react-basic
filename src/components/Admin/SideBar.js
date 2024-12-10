import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div>
            <Sidebar>
                <Menu>
                    <MenuItem component={<Link to="/" />}> Homepage </MenuItem>
                    <MenuItem component={<Link to="/admins" />}> Dashboard </MenuItem>
                    <SubMenu label="Charts">
                        <MenuItem component={<Link to="/admins/manage-users" />}> 
                            User
                        </MenuItem>
                        <MenuItem> Quiz </MenuItem>
                        <MenuItem> Câu hỏi </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar