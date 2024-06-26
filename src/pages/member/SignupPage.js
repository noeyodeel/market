import LogoutComponent from "../../components/member/LogoutComponent";
import SignupComponent from "../../components/member/SignupComponent";
import SignupForm from "../../components/member/SignupComponent";
import BasicMenu from "../../menus/BasicMenu";


const LogoutPage = () => {
  return ( 
    <div className='fixed top-0 left-0 z-[1055] flex flex-col h-full w-full'>
      <BasicMenu/>
      <div className="w-full flex flex-wrap  h-full justify-center  items-center border-2">
        <SignupComponent/>
      </div>  
    </div>
   );
}
 
export default LogoutPage;
