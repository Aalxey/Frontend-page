import { useState } from "react";
import { FiBell } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle, FaRegHeart } from "react-icons/fa";
import Hell from "../assets/hell.jpeg";
import first from "../assets/first.jpeg";
import sec from "../assets/sec.jpeg";
import OET from "../assets/OET.jpeg";
import fo from "../assets/fo.jpeg";
import boy from "../assets/boy.jpeg";
import food from "../assets/food.jpeg";
import b from "../assets/b.png";
import oo from "../assets/oo.png";
import c from "../assets/c.png";
import la from "../assets/la.png";
import p from "../assets/p.jpg";
import q from "../assets/q.jpg";
import r from "../assets/r.jpg";
import lo from "../assets/lo.jpeg";
import "./Homes.css";

const Homes = ({ onSearch }) => {
  const [data, setData] = useState("");
  const handleInputChange = (event) => {
    setData(event.target.value);
  };
  const handleSearch = () => {
    onSearch(data);
  };
  return (
    <>
      <div className="header">
        <div className="lo">
          <img src={lo} style={{ width: "80px" }} />
        </div>
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={data}
            onChange={handleInputChange}
            placeholder="Search for a match by city, age, gender..."
            className="search-input"
          />
        </div>
        <div className="side">
          <FaRegComments size={"30"} className="icon" />
          <FiBell size={"30"} className="icon" />
          <img src={la} style={{ width: "30px" }} className="icon" />
        </div>
      </div>
      <div className="body">
        <div className="icons">
          <div className="icon-label-container pink">
            <CgNotes size={"20"} />
            <p className="custom-font">Explore</p>
          </div>
          <div className="icon-label-container">
            <FaSearch size={"20"} />
            <p className="custom-font">Search</p>
          </div>
          <div className="icon-label-container">
            <FaRegComments size={"20"} />
            <p className="custom-font">Messages</p>
          </div>
          <div className="icon-label-container">
            <FiBell size={"20"} />
            <p className="custom-font">Activity</p>
          </div>
          <div className="icon-label-container">
            <img src={la} style={{ width: "30px", marginRight: "5px" }} />
            <p className="custom-font">Profile</p>
          </div>
          <div className="icon-label-container">
            <FaUserFriends size={"20"} />
            <p className="custom-font">Following</p>
          </div>
          <div className="down">
            <h4 className="custom-font">Recently Joined</h4>
          </div>
          <div className="avatar">
            <img src={oo} style={{ width: "30px" }} />
            <img src={c} style={{ width: "30px" }} />
            <img src={b} style={{ width: "30px" }} />
            <img src={la} style={{ width: "30px" }} />
          </div>
          <div className="cities">
            <div className="Popular">
              <p className="custom-font">Popular cities</p>
            </div>
            <div className="mianprofile">
              <div className="Popular">
                <img
                  src={p}
                  style={{
                    width: "55pxpx",
                    marginTop: "15px",
                    borderRadius: "10px",
                    height: "60px",
                  }}
                />
              </div>
              <div>
                <b>
                  <p className="custom-font">New-york</p>
                </b>
                <p className="small">18,654 Members</p>
              </div>
            </div>
            <div className="mianprofile">
              <div className="Popular">
                <img
                  src={q}
                  style={{
                    width: "55pxpx",
                    marginTop: "15px",
                    borderRadius: "10px",
                    height: "60px",
                  }}
                />
              </div>
              <div>
                <b>
                  <p className="custom-font">Singapore</p>
                </b>
                <p className="small">18,000 Members</p>
              </div>
            </div>
            <div className="mianprofile">
              <div className="Popular">
                <img
                  src={r}
                  style={{
                    width: "55pxpx",
                    marginTop: "15px",
                    borderRadius: "10px",
                    height: "60px",
                  }}
                />
              </div>
              <div>
                <b>
                  <p className="custom-font">New-york</p>
                </b>
                <p className="small">17,000 Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="para">
            <p className="custom-font">Online in your neighbourhood</p>
            <div className="arrow">
              <BsFillArrowLeftSquareFill />
              <div className="right">
                <BsFillArrowRightSquareFill />
              </div>
            </div>
          </div>
          <div className="boxes">
            <div class="box">
              <img src={Hell} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Balaram</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
            <div class="box">
              <img src={sec} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Narayan</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
            <div class="box">
              <img src={OET} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Bishnu</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
            <div class="box">
              <img src={fo} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Shiva</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
            <div class="box">
              <img src={first} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Krishna</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
            <div class="box">
              <img src={boy} style={{ width: "100px", height: "100px" }} />
              <div class="nameholder">Paras</div>
              <div class="info">25yo-itahari</div>
              <div class="Message">
                <button class="msg" onclick="showAlert()">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div className="update">
            <h4 className="custom-font">Updated posts</h4>
          </div>
          <div className="foot">
            <div className="profile">
              <img
                src={b}
                style={{
                  width: "40px",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              />
              <div className="la">
                <p className="custom-font">Gita</p>
              </div>
            </div>
            <div className="post">
              <img
                src={food}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "10px",
                  marginLeft: "22px",
                }}
              />
            </div>
            <hr className="line" />
            <div className="signs">
              <div className="check">
                <FaRegCheckCircle size={"30"} />
              </div>
              <div className="wrong">
                <RxCrossCircled size={"31"} />
              </div>
              <div className="heart">
                <FaRegHeart size={"31"} />
              </div>
            </div>
          </div>
        </div>
        <div className="recently">
          <h3 className="custom-font">Recently Joined</h3>
          <div className="ha">
            <div className="ho">
              <img src={b} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Daniel</p>
                <p className="small">itahari</p>
              </div>
            </div>
            <div className="ho">
              <img src={b} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Rao</p>
                <p className="small">Dharan</p>
              </div>
            </div>
            <div className="ho">
              <img src={b} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Miksaml</p>
                <p className="small">Inaruwa</p>
              </div>
            </div>
            <div className="ho">
              <img src={oo} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Mikasa</p>
                <p className="small">Biratnagar</p>
              </div>
            </div>
            <div className="ho">
              <img src={la} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Milan</p>
                <p className="small">itahari</p>
              </div>
            </div>
            <div className="ho">
              <img src={c} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Sarswati</p>
                <p className="small">Biratnagar</p>
              </div>
            </div>
            <div className="ho">
              <img src={la} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Suresh</p>
                <p className="small">Dharan</p>
              </div>
            </div>
            <div className="ho">
              <img src={b} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Mukesh</p>
                <p className="small">Inaruwa</p>
              </div>
            </div>
            <div className="ho">
              <img src={la} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Bill gates</p>
                <p className="small">itahari</p>
              </div>
            </div>
            <div className="ho">
              <img src={oo} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Mark</p>
                <p className="small">Inaruwa</p>
              </div>
            </div>
            <div className="ho">
              <img src={c} style={{ width: "75px", marginTop: "15px" }} />
              <div className="huhu">
                <p className="custom-font">Andrew</p>
                <p className="small">Dharan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homes;
