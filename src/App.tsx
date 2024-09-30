import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./login/signup";
import TopHeader from "./layout/TopHeader";
import Footer from "./layout/Footer";
import Login from "./login/login";
import Top from "./top/Top";
import Mypage from "./mypage/Mypage";
import ProfileEditPage from "./prof_edit/ProfEditPage";
import PostAll from "./post_all/Postall";
import PostDetail from "./post_detail/post_detail";
import UserProf from "./user_prof/user_prof";
import Pot from "./Pots/Pot";
import ChatAll from "./chat/chat_all";
import HashTagPost from "./hash_tag/hash_tag";
// import { UIProvider } from "@yamada-ui/react";
import "./App.css";

const App = () => {
  return (
    <>
    {/* <UIProvider></UIProvider> */}
      <TopHeader></TopHeader>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/top" element={<Top></Top>} />
          <Route path="/mypage" element={<Mypage></Mypage>} />
          <Route
            path="/prof_edit"
            element={<ProfileEditPage></ProfileEditPage>}
          />
          <Route path="/post_all" element={<PostAll></PostAll>} />
          <Route
            path="/post_detail/:id"
            element={<PostDetail></PostDetail>}
          ></Route>
          <Route path="/user_prof/:id" element={<UserProf></UserProf>}></Route>
          <Route path="/pots" element={<Pot></Pot>}></Route>
          <Route path="/chat" element={<ChatAll></ChatAll>}></Route>
          <Route
            path="/hashtags/:hashtag"
            element={<HashTagPost></HashTagPost>}
          ></Route>
        </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
