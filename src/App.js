import React, {useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebase from './firebase/config';
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Channel from './components/Channel';

const App = () => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header user={user} />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                        <Route path="/channel/:id" element={<Channel />} />

                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
