import { Loader, Table } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

import "./index.scss";
import { useGetProperties } from "hooks/useProperty";
import { Link } from "react-router-dom";
const Property = () => {
  const properties = useGetProperties();
  const editPropertyHandler = (id) => {
    console.log(id);
  };
  const deletePropertyHandler = (id) => {
    console.log(id);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="PropertyPage">
        <div className="PropertyPage__header">
          <h2>List of Properties</h2>
          <Link to="add" className="btn-main">
            Add
          </Link>
        </div>
        <div className="container">
          {properties ? (
            properties.data.data.length === 0 ? (
              <h2>Empty</h2>
            ) : (
              <div>
                {properties.data.data.map((property) => (
                  <Table
                    key={property.id}
                    id={property.id}
                    name={property.name}
                    address={property.address}
                    onEdit={() => editPropertyHandler(property.id)}
                    onDelete={() => deletePropertyHandler(property.id)}
                  />
                ))}
              </div>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Property;
