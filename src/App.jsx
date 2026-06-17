import { useState } from "react";
import { ConfigProvider } from "antd";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { initialWorkOrders } from "./data/workOrders";

const getUserRole = (username) => (username === "admin" ? "admin" : "user");

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [workOrders, setWorkOrders] = useState(initialWorkOrders);

  const handleLogin = (username) => {
    setCurrentUser({
      username,
      role: getUserRole(username),
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setWorkOrders(initialWorkOrders);
  };

  const handleDelete = (id) => {
    setWorkOrders((currentList) => currentList.filter((item) => item.id !== id));
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0f766e",
          borderRadius: 14,
          colorBgLayout: "#f3f6f4",
          fontFamily:
            '"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
        },
      }}
    >
      {currentUser ? (
        <DashboardPage
          currentUser={currentUser}
          workOrders={workOrders}
          onDelete={handleDelete}
          onLogout={handleLogout}
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </ConfigProvider>
  );
}

export default App;
