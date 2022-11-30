import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isValidUser = () => {
    const isAuth = false;
    if (!isAuth) {
      //   router.push("/");
    }
  };
  useEffect(() => {
    isValidUser();
  }, []);
  return <>{children}</>;
};
export default Layout;
