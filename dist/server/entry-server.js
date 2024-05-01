import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { createContext, useEffect, useState, useContext, useRef, lazy } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate, useParams, Outlet, Routes, Route } from "react-router-dom";
import { faCircleArrowLeft, faLocationDot, faPhone, faClock, faUsers, faUserTie, faArrowUp, faArrowDown, faEye, faUser, faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import QRCode from "react-qr-code";
import { Turn } from "hamburger-react";
import { HashLink } from "react-router-hash-link";
import md5 from "md5";
import ReCAPTCHA from "react-google-recaptcha";
import { animateScroll } from "react-scroll";
const UserContext = createContext();
const aspectReducer = createSlice({
  name: "aspects",
  initialState: {
    aspects: []
  },
  reducers: {
    setAspects(state, action) {
      return { ...state, aspects: [...action.payload] };
    }
  }
});
const { setAspects } = aspectReducer.actions;
const aspectReducer$1 = aspectReducer.reducer;
const projectReducer = createSlice({
  name: "projects",
  initialState: {
    projects: []
  },
  reducers: {
    setProjects(state, action) {
      return { ...state, projects: [...action.payload] };
    }
  }
});
const { setProjects } = projectReducer.actions;
const projectReducer$1 = projectReducer.reducer;
const websiteDataReducer = createSlice({
  name: "websiteDates",
  initialState: {
    websiteDates: []
  },
  reducers: {
    setWebsiteData(state, action) {
      return { ...state, websiteDates: action.payload };
    }
  }
});
const { setWebsiteData } = websiteDataReducer.actions;
const websiteDataReducer$1 = websiteDataReducer.reducer;
const store = configureStore({
  reducer: {
    aspects: aspectReducer$1,
    projects: projectReducer$1,
    websiteDates: websiteDataReducer$1
  }
});
const mainContainer$4 = "_mainContainer_nh882_1";
const style$x = {
  mainContainer: mainContainer$4
};
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const emptyBlock$1 = "_emptyBlock_btoow_24";
const style$w = {
  emptyBlock: emptyBlock$1
};
const ComponentMainButton = (props) => {
  const content2 = props.content;
  const color = props.color;
  const styleClass = props.styleClass;
  const disabled = props.disabled;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      disabled,
      onMouseLeave: props.onMouseLeave,
      onMouseEnter: props.onMouseEnter,
      className: `${style$w.btnKnowMore} ${styleClass}`,
      style: { backgroundColor: color },
      onClick: props.clickEvent,
      children: [
        content2,
        /* @__PURE__ */ jsx("div", { className: style$w.emptyBlock })
      ]
    }
  );
};
const container$r = "_container_zaoeb_1";
const style$v = {
  container: container$r
};
const ArrowBack = (props) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${style$v.container} ${props.className}`,
      onClick: props.onClickEvent,
      style: { top: props.top },
      children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faCircleArrowLeft })
    }
  );
};
const ChoosedProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios("https://api.powepeople.com/projects/" + id).then((resp) => {
      setData(resp.data);
    }).catch((error) => {
      navigate("/error");
    });
  }, []);
  if (!data) {
    return "";
  }
  function displaySubPage() {
    navigate("/donat");
  }
  function displayOneStepAgo() {
    navigate(-1);
  }
  return /* @__PURE__ */ jsxs("div", { className: "containerForSubPage", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: style$x.mainContainer, children: [
      /* @__PURE__ */ jsx("h4", { dangerouslySetInnerHTML: { __html: data.title } }),
      /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data.content } }),
      /* @__PURE__ */ jsx(ComponentMainButton, { content: "Долучитися до збору", color: "#FAC000", clickEvent: displaySubPage }),
      /* @__PURE__ */ jsx(ArrowBack, { onClickEvent: displayOneStepAgo })
    ] })
  ] });
};
const mainContainer$3 = "_mainContainer_1fa24_5";
const containerForDetails = "_containerForDetails_1fa24_12";
const blockForImage = "_blockForImage_1fa24_19";
const blockForButton = "_blockForButton_1fa24_57";
const imgNoFlyDove = "_imgNoFlyDove_1fa24_64";
const flyMove = "_flyMove_1fa24_1";
const imgFlyDove = "_imgFlyDove_1fa24_82";
const arrow$2 = "_arrow_1fa24_88";
const style$u = {
  mainContainer: mainContainer$3,
  containerForDetails,
  blockForImage,
  blockForButton,
  imgNoFlyDove,
  flyMove,
  imgFlyDove,
  arrow: arrow$2
};
const content = "_content_1uyj3_1";
const style$t = {
  content
};
const Detail = (props) => {
  const data = props.data;
  return /* @__PURE__ */ jsx("p", { className: style$t.content, dangerouslySetInnerHTML: { __html: data } });
};
const flyDove = "/assets/flyDove-CDd7oI6g.png";
const Details = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.detailSubPage;
  });
  const allDetails = data == null ? void 0 : data.details;
  function displayOneStepAgo() {
    navigate(-1);
  }
  function displaySubPage() {
    navigate("/donat");
  }
  const [styleFlyDove, setStyleFlyDove] = useState(false);
  function setStyleToFlyDove() {
    setStyleFlyDove(true);
  }
  function setStyleToNoFlyDove() {
    setStyleFlyDove(false);
  }
  if (!allDetails) {
    return "";
  }
  const details = allDetails.map((detail, index) => /* @__PURE__ */ jsx(Detail, { data: detail }, index));
  return /* @__PURE__ */ jsxs("div", { className: "containerForSubPage", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: style$u.mainContainer, children: [
      /* @__PURE__ */ jsx("h3", { children: data.titleOfHeading }),
      /* @__PURE__ */ jsx("div", { className: style$u.containerForDetails, children: details }),
      /* @__PURE__ */ jsxs("div", { className: style$u.blockForImage, children: [
        /* @__PURE__ */ jsx("img", { src: "https://api.powepeople.com/files/" + data.imageId, role: "presentation", alt: "" }),
        /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: data.descriptionToImage } })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style$u.blockForButton, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: flyDove,
            alt: "",
            role: "presentation",
            className: `${style$u.imgNoFlyDove} ${styleFlyDove ? style$u.imgFlyDove : ""}`
          }
        ),
        /* @__PURE__ */ jsx(
          ComponentMainButton,
          {
            content: "Долучитися до збору",
            color: "#FAC000",
            onMouseEnter: setStyleToFlyDove,
            onMouseLeave: setStyleToNoFlyDove,
            clickEvent: displaySubPage
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(ArrowBack, { className: style$u.arrow, onClickEvent: displayOneStepAgo })
  ] });
};
const container$q = "_container_1h0pn_1";
const mainContainer$2 = "_mainContainer_1h0pn_7";
const blockForLogoAndContact = "_blockForLogoAndContact_1h0pn_23";
const grayBelt = "_grayBelt_1h0pn_30";
const adminIcon = "_adminIcon_1h0pn_58";
const style$s = {
  container: container$q,
  mainContainer: mainContainer$2,
  blockForLogoAndContact,
  grayBelt,
  adminIcon
};
const container$p = "_container_1m4lr_1";
const blockForContact$1 = "_blockForContact_1m4lr_35";
const contact = "_contact_1m4lr_49";
const icon$4 = "_icon_1m4lr_61";
const style$r = {
  container: container$p,
  blockForContact: blockForContact$1,
  contact,
  icon: icon$4
};
const Contacts = () => {
  const data = useSelector((state) => state.websiteDates.websiteDates.footer);
  if (!data) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$r.container, children: [
    /* @__PURE__ */ jsx("h4", { children: "Контакти:" }),
    /* @__PURE__ */ jsxs("div", { className: style$r.blockForContact, children: [
      /* @__PURE__ */ jsxs("div", { className: style$r.contact, children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLocationDot, className: style$r.icon }),
        /* @__PURE__ */ jsx("span", { children: data.adress })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style$r.contact, children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPhone, className: style$r.icon }),
        /* @__PURE__ */ jsx("span", { children: data.contact })
      ] })
    ] })
  ] });
};
const container$o = "_container_dn6sg_1";
const blockForTitleAndIcon$1 = "_blockForTitleAndIcon_dn6sg_27";
const icon$3 = "_icon_dn6sg_47";
const blockForOpeningHours = "_blockForOpeningHours_dn6sg_53";
const style$q = {
  container: container$o,
  blockForTitleAndIcon: blockForTitleAndIcon$1,
  icon: icon$3,
  blockForOpeningHours
};
const OpenHours = () => {
  const data = useSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.footer) == null ? void 0 : _b.workShedule;
  });
  if (!data) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$q.container, children: [
    /* @__PURE__ */ jsxs("div", { className: style$q.blockForTitleAndIcon, children: [
      /* @__PURE__ */ jsx("h4", { children: "Графік роботи:" }),
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClock, className: style$q.icon })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$q.blockForOpeningHours, children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Понеділок: ",
        data.monday.isOpen ? `${data.monday.open}-${data.monday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Вівторок: ",
        data.tuesday.isOpen ? `${data.tuesday.open}-${data.tuesday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Середа: ",
        data.wednesday.isOpen ? `${data.wednesday.open}-${data.wednesday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Четвер: ",
        data.thursday.isOpen ? `${data.thursday.open}-${data.thursday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "П’ятниця: ",
        data.friday.isOpen ? `${data.friday.open}-${data.friday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Субота: ",
        data.saturday.isOpen ? `${data.saturday.open}-${data.saturday.close}` : "зачинено"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Неділя: ",
        data.sunday.isOpen ? `${data.sunday.open}-${data.sunday.close}` : "зачинено"
      ] })
    ] })
  ] });
};
const container$n = "_container_1vedj_1";
const blockForTitleAndIcon = "_blockForTitleAndIcon_1vedj_25";
const icon$2 = "_icon_1vedj_45";
const blockForVisits = "_blockForVisits_1vedj_51";
const style$p = {
  container: container$n,
  blockForTitleAndIcon,
  icon: icon$2,
  blockForVisits
};
const VisitCounter = () => {
  const navigate = useNavigate();
  const [dataCounterOfVisits, setDataCounterOfVisits] = useState();
  function fetchData() {
    axios("https://api.powepeople.com/visits/stats").then(
      (resp) => {
        setDataCounterOfVisits(resp.data);
      }
    ).catch((error) => {
      navigate("/error");
    });
  }
  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      fetchData();
    }, 25e3);
    return () => {
      clearInterval(timer);
    };
  }, []);
  if (!dataCounterOfVisits) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$p.container, children: [
    /* @__PURE__ */ jsxs("div", { className: style$p.blockForTitleAndIcon, children: [
      /* @__PURE__ */ jsx("h4", { children: "Кількість відвідувань :" }),
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faUsers, className: style$p.icon })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$p.blockForVisits, children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Онлайн: ",
        dataCounterOfVisits.activeNow
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Сьогодні:",
        dataCounterOfVisits.totalToday
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Учорай: ",
        dataCounterOfVisits.yesterdayStats
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Цього тижня: ",
        dataCounterOfVisits.thisWeekStats
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Цього місяця: ",
        dataCounterOfVisits.thisMonthStats
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Цього року: ",
        dataCounterOfVisits.thisYearStats
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "Усього: ",
        dataCounterOfVisits.totalStats
      ] })
    ] })
  ] });
};
const container$m = "_container_16j9d_1";
const qrCode = "_qrCode_16j9d_57";
const style$o = {
  container: container$m,
  qrCode
};
const QrCode = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: style$o.container, children: [
    /* @__PURE__ */ jsx("h4", { children: "Мобільна версія:" }),
    isClient ? /* @__PURE__ */ jsx(
      QRCode,
      {
        size: 256,
        className: style$o.qrCode,
        value: window.location.href,
        fgColor: "#e3c631",
        bgColor: "rgba(178,181,187,0.03)",
        viewBox: `0 0 256 256`
      }
    ) : ""
  ] });
};
const container$l = "_container_flyov_1";
const style$n = {
  container: container$l
};
const herb = "/assets/herb-DA4qpu8H.png";
const LogoOfWebsite = () => {
  const data = useSelector((state) => state.websiteDates.websiteDates.footer);
  if (!data) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$n.container, children: [
    /* @__PURE__ */ jsx("img", { src: herb, role: "presentation", alt: "" }),
    /* @__PURE__ */ jsx("h4", { children: data.titleOfFoundation })
  ] });
};
const Footer = () => {
  const [year, setYear] = useState();
  useEffect(() => {
    const data = /* @__PURE__ */ new Date();
    const year2 = data.getFullYear();
    setYear(year2);
  }, []);
  function desplayAdminPanel() {
    window.location.href = "https://admin.powepeople.com";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$s.container, id: "footer", children: [
    /* @__PURE__ */ jsxs("div", { className: style$s.mainContainer, children: [
      /* @__PURE__ */ jsxs("div", { className: style$s.blockForLogoAndContact, children: [
        /* @__PURE__ */ jsx(Contacts, {}),
        /* @__PURE__ */ jsx(LogoOfWebsite, {})
      ] }),
      /* @__PURE__ */ jsx(OpenHours, {}),
      /* @__PURE__ */ jsx(VisitCounter, {}),
      /* @__PURE__ */ jsx(QrCode, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: style$s.grayBelt, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("span", { children: [
        " © Всі права захищені ",
        year,
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://t.me/korneliia0808",
            children: "Веб-розробник:Корнелія Мушак"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faUserTie, className: style$s.adminIcon, onClick: desplayAdminPanel })
    ] }) })
  ] });
};
const container$k = "_container_tdc8z_1";
const arrowToTopIcon = "_arrowToTopIcon_tdc8z_33";
const style$m = {
  container: container$k,
  arrowToTopIcon
};
const ArrowToTop = () => {
  const [arrowToTop, setArrowToTop] = useState(false);
  function checkY() {
    if (window.pageYOffset > 800) {
      setArrowToTop(true);
      return;
    }
    setArrowToTop(false);
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    document.addEventListener("scroll", checkY);
    return () => {
      document.removeEventListener("scroll", checkY);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: style$m.container, style: { bottom: arrowToTop ? "5px" : "-50px" }, onClick: scrollToTop, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowUp, className: style$m.arrowToTopIcon }) });
};
const blockForLogoAndNav = "_blockForLogoAndNav_1vt4g_1";
const navContainer = "_navContainer_1vt4g_23";
const emptyBlock = "_emptyBlock_1vt4g_51";
const hamburger$1 = "_hamburger_1vt4g_69";
const hamburgerOpen = "_hamburgerOpen_1vt4g_161";
const style$l = {
  blockForLogoAndNav,
  navContainer,
  emptyBlock,
  hamburger: hamburger$1,
  hamburgerOpen
};
const container$j = "_container_1esx5_1";
const min = "_min_1esx5_73";
const style$k = {
  container: container$j,
  min
};
const ComponentForLogoAndTitle = (props) => {
  const title = useSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.header) == null ? void 0 : _b.titleOfWebsite;
  });
  if (!title) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: `${style$k.container} ${props.belt ? "" : style$k.min}`, children: [
    /* @__PURE__ */ jsx("img", { src: herb, alt: "herb" }),
    /* @__PURE__ */ jsx("h1", { children: title })
  ] });
};
const container$i = "_container_ja04v_1";
const hamburger = "_hamburger_ja04v_67";
const style$j = {
  container: container$i,
  hamburger
};
function toScroll(element) {
  let intervalFun;
  const eventHandler = () => {
    clearInterval(intervalFun);
    clearEvent();
  };
  document.addEventListener("wheel", eventHandler);
  const clearEvent = () => {
    document.removeEventListener("wheel", eventHandler);
  };
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  let positionScrollY = window.scrollY;
  if (positionScrollY < yCoordinate + yOffset) {
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  } else {
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }
  setTimeout(() => {
    clearEvent();
    clearInterval(intervalFun);
  }, 5e3);
}
const NavOptions = (props) => {
  const allProjects = useSelector((state) => state.projects.projects);
  function close() {
    if (props.setOpen) {
      props.setOpen(false);
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "./#body", children: "Головна" }),
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "./#aboutUs", children: "Про нас" }),
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "./#ourProjects", children: allProjects.length > 1 ? /* @__PURE__ */ jsx(Fragment, { children: "Наші проекти" }) : /* @__PURE__ */ jsx(Fragment, { children: "Наш проект" }) }),
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "./#advice", children: "Консультація" }),
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "/details", children: "Реквізити" }),
    /* @__PURE__ */ jsx(HashLink, { scroll: (element) => toScroll(element), onClick: close, to: "./#footer", children: "Контакти" })
  ] });
};
const Nav = (props) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: style$j.container, ref: props.navRedf, children: /* @__PURE__ */ jsx(NavOptions, {}) }),
    /* @__PURE__ */ jsx("div", { className: style$j.hamburger, children: /* @__PURE__ */ jsx(Turn, { size: 35, toggled: props.isOpen, toggle: props.setOpen }) })
  ] });
};
const BlockForLogoAndNav = (props) => {
  const belt = props.belt;
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: style$l.emptyBlock }),
    /* @__PURE__ */ jsxs("div", { className: style$l.blockForLogoAndNav, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: style$l.navContainer,
          style: { padding: belt ? "15px 10vw 15px 0" : " 5px 0px", height: belt ? "75px" : "60px" },
          children: [
            /* @__PURE__ */ jsx(ComponentForLogoAndTitle, { belt }),
            /* @__PURE__ */ jsx(Nav, { isOpen, setOpen })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `${style$l.hamburger}  ${isOpen ? style$l.hamburgerOpen : ""}`, children: /* @__PURE__ */ jsx(NavOptions, { setOpen }) })
    ] })
  ] });
};
const container$h = "_container_1lgzn_1";
const blockForContact = "_blockForContact_1lgzn_29";
const iconPhone = "_iconPhone_1lgzn_37";
const tegForContact = "_tegForContact_1lgzn_47";
const blockForHeart = "_blockForHeart_1lgzn_59";
const ukrainianHeartImage = "_ukrainianHeartImage_1lgzn_77";
const style$i = {
  container: container$h,
  blockForContact,
  iconPhone,
  tegForContact,
  blockForHeart,
  ukrainianHeartImage
};
const ukrainianHeart = "/assets/heartUkrainian-SOkPUU9t.png";
const BeltForContact = (props) => {
  const data = props.data;
  return /* @__PURE__ */ jsxs("div", { className: style$i.container, children: [
    /* @__PURE__ */ jsxs("div", { className: style$i.blockForContact, children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPhone, className: style$i.iconPhone }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:" + data.contact.replace("+", "").replaceAll("  ", "").replaceAll(" ", ""),
          className: style$i.tegForContact,
          children: data.contact
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$i.blockForHeart, children: [
      /* @__PURE__ */ jsx("img", { src: ukrainianHeart, role: "presentation", alt: "", className: style$i.ukrainianHeartImage }),
      /* @__PURE__ */ jsx("span", { children: "Все Буде Україна!" })
    ] })
  ] });
};
const DefaultPanel$1 = () => {
  const navigate = useNavigate();
  const dataOfHeader = useSelector((state) => state.websiteDates.websiteDates.header);
  const [belt, setBelt] = useState(true);
  function checkY() {
    if (window.pageYOffset > 15) {
      setBelt(false);
      return;
    }
    setBelt(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    axios("https://api.powepeople.com/aspects").then(
      (resp) => {
        dispatch(setAspects(resp.data));
      }
    ).catch((error) => {
      navigate("/error");
    });
    axios("https://api.powepeople.com/website-data").then(
      (resp) => {
        dispatch(setWebsiteData(resp.data));
      }
    ).catch((error) => {
      navigate("/error");
    });
    axios("https://api.powepeople.com/projects").then(
      (resp) => {
        dispatch(setProjects(resp.data));
      }
    ).catch((error) => {
      navigate("/error");
    });
    pingerFun();
    const pinger = setInterval(() => {
      pingerFun();
    }, 1e4);
    return () => {
      clearInterval(pinger);
    };
  }, []);
  function pingerFun() {
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", 0);
    }
    if (document.hidden) {
      return;
    }
    if (document.visibilityState === "hidden") {
      return;
    }
    const link = "https://api.powepeople.com/visits";
    axios(link, { params: { code: generateMd5(), id: localStorage.getItem("sessionId") } }).then((data) => {
      if (data.data.id) {
        localStorage.setItem("sessionId", data.data.id);
      }
    }).catch((error) => {
    });
  }
  useEffect(() => {
    document.addEventListener("scroll", checkY);
    return () => {
      document.removeEventListener("scroll", checkY);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flexibleBlock", children: [
    dataOfHeader && /* @__PURE__ */ jsx(BeltForContact, { data: dataOfHeader.blockOfBelt }),
    /* @__PURE__ */ jsx(BlockForLogoAndNav, { belt }),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ArrowToTop, {})
  ] });
  function generateMd5() {
    const date = (/* @__PURE__ */ new Date()).getHours() + "*" + (/* @__PURE__ */ new Date()).getMinutes() + "*" + Number((/* @__PURE__ */ new Date()).getSeconds());
    const value = `${date}`;
    return md5(value);
  }
};
const container$g = "_container_1wdd1_1";
const style$h = {
  container: container$g
};
const container$f = "_container_1mj6x_1";
const style$g = {
  container: container$f
};
const Content$1 = (props) => {
  const navigate = useNavigate();
  let data = props.data;
  if (typeof document == "undefined") {
    const user = useContext(UserContext);
    data = user.defaultData.aboutUs;
  }
  function displaySubPage() {
    navigate("/aboutUs");
  }
  return /* @__PURE__ */ jsxs("div", { className: style$g.container, children: [
    /* @__PURE__ */ jsx("h2", { children: data == null ? void 0 : data.titleOfHeading }),
    /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data == null ? void 0 : data.shortDescription } }),
    /* @__PURE__ */ jsx(ComponentMainButton, { content: "Детальніше", color: "#FFD801", clickEvent: displaySubPage })
  ] });
};
const AboutUs = () => {
  let data = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.aboutUs;
  });
  if (typeof document == "undefined") {
    const user = useContext(UserContext);
    data = user.defaultData.aboutUs;
  }
  return /* @__PURE__ */ jsxs("div", { className: style$h.container, id: "aboutUs", children: [
    /* @__PURE__ */ jsx(Content$1, { data }),
    /* @__PURE__ */ jsx("img", { src: "https://api.powepeople.com/files/" + (data == null ? void 0 : data.imgId), role: "presentation", alt: "" })
  ] });
};
const container$e = "_container_11blh_1";
const mainBtn$1 = "_mainBtn_11blh_89";
const style$f = {
  container: container$e,
  mainBtn: mainBtn$1
};
const DonationAndAdvice = (props) => {
  const imageId = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates.advice) == null ? void 0 : _a.imageId;
  });
  if (!imageId) {
    return "";
  }
  const title = props.title;
  const whichFunction = props.onClickEvent;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: style$f.container,
      onClick: whichFunction,
      style: { backgroundImage: `url(${"https://api.powepeople.com/files/" + imageId})` },
      children: [
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx(
          ComponentMainButton,
          {
            content: "Детальніше",
            color: "#FFD801",
            clickEvent: whichFunction,
            styleClass: style$f.mainBtn
          }
        )
      ]
    }
  );
};
const container$d = "_container_1g5l3_1";
const shortDescriptionUnderHeadline = "_shortDescriptionUnderHeadline_1g5l3_33";
const containerForActivities = "_containerForActivities_1g5l3_61";
const blockForBtn$2 = "_blockForBtn_1g5l3_95";
const style$e = {
  container: container$d,
  shortDescriptionUnderHeadline,
  containerForActivities,
  blockForBtn: blockForBtn$2
};
const container$c = "_container_1nb2v_1";
const icon$1 = "_icon_1nb2v_93";
const style$d = {
  container: container$c,
  icon: icon$1
};
const CardOfAspect = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  function displayChoosedAspect() {
    navigate("/aspect/" + data.id);
  }
  return /* @__PURE__ */ jsxs("div", { className: style$d.container, onClick: displayChoosedAspect, children: [
    /* @__PURE__ */ jsx("h4", { dangerouslySetInnerHTML: { __html: data.title } }),
    /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data.content } }),
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowDown, className: style$d.icon })
  ] });
};
const AspectsOfTheProject = (props) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.websiteDates.websiteDates.aspects);
  const areAllAspects = props.allAspects;
  const allAspects = useSelector((state) => state.aspects.aspects);
  let aspectCards = allAspects.map((aspect, index) => /* @__PURE__ */ jsx(
    CardOfAspect,
    {
      data: aspect
    },
    index
  ));
  if (!areAllAspects) {
    aspectCards = aspectCards.slice(0, 9);
  }
  function desplaySubPage() {
    navigate("/aspects");
  }
  function displayOneStepAgo() {
    navigate(-1);
  }
  if (!data) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$e.container, style: { paddingTop: areAllAspects ? "100px" : "" }, children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    areAllAspects && /* @__PURE__ */ jsx(ArrowBack, { onClickEvent: displayOneStepAgo }),
    /* @__PURE__ */ jsx("h2", { dangerouslySetInnerHTML: { __html: data.titleOfHeading } }),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: style$e.shortDescriptionUnderHeadline,
        dangerouslySetInnerHTML: { __html: data.mainDescription }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: style$e.containerForActivities, children: aspectCards }),
    /* @__PURE__ */ jsx("div", { className: style$e.blockForBtn, style: { display: !areAllAspects ? "" : "none" }, children: allAspects.length > 9 && /* @__PURE__ */ jsx(ComponentMainButton, { content: "Усі аспекти", color: "#1265A8", clickEvent: desplaySubPage }) })
  ] });
};
const container$b = "_container_1g3l5_1";
const containerForCards = "_containerForCards_1g3l5_35";
const blockForBtn$1 = "_blockForBtn_1g3l5_59";
const mainBtn = "_mainBtn_1g3l5_71";
const arrowBack = "_arrowBack_1g3l5_85";
const AllProjects = "_AllProjects_1g3l5_95";
const style$c = {
  container: container$b,
  containerForCards,
  blockForBtn: blockForBtn$1,
  mainBtn,
  arrowBack,
  AllProjects
};
const container$a = "_container_xg5r6_1";
const buttonInProjectCard = "_buttonInProjectCard_xg5r6_109";
const iconEyes = "_iconEyes_xg5r6_127";
const style$b = {
  container: container$a,
  buttonInProjectCard,
  iconEyes
};
const CardOfProject = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  function displaySubPage() {
    navigate("/project/" + data.id);
  }
  return /* @__PURE__ */ jsxs("div", { className: style$b.container, onClick: displaySubPage, children: [
    /* @__PURE__ */ jsx("h3", { dangerouslySetInnerHTML: { __html: data.title } }),
    /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEye, className: style$b.iconEyes })
  ] });
};
const OurProjects = (props) => {
  const navigate = useNavigate();
  const areAllProjects = props.allProjects;
  const allProjects = useSelector((state) => state.projects.projects);
  let projectCards = allProjects.map((project, index) => /* @__PURE__ */ jsx(CardOfProject, { data: project }, index));
  if (!areAllProjects) {
    projectCards = projectCards.slice(0, 4);
  }
  function desplaySubPage() {
    navigate("/projects");
  }
  function displayOneStepAgo() {
    navigate(-1);
  }
  return /* @__PURE__ */ jsxs("div", { className: `${style$c.container}  ${areAllProjects ? style$c.AllProjects : ""}`, id: "ourProjects", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    areAllProjects && /* @__PURE__ */ jsx(ArrowBack, { className: style$c.arrowBack, onClickEvent: displayOneStepAgo }),
    projectCards.length > 1 ? /* @__PURE__ */ jsx("h2", { children: "Наші проекти" }) : /* @__PURE__ */ jsx("h2", { children: "Наш проект" }),
    /* @__PURE__ */ jsx("div", { className: style$c.containerForCards, children: projectCards }),
    projectCards.length >= 3 && /* @__PURE__ */ jsx("div", { className: style$c.blockForBtn, style: { display: !areAllProjects ? "" : "none" }, children: /* @__PURE__ */ jsx(ComponentMainButton, { content: "Усі проекти", clickEvent: desplaySubPage, styleClass: style$c.mainBtn }) })
  ] });
};
const container$9 = "_container_1lref_1";
const blueBackground = "_blueBackground_1lref_33";
const style$a = {
  container: container$9,
  blueBackground
};
const container$8 = "_container_1der6_1";
const style$9 = {
  container: container$8
};
const Content = () => {
  return /* @__PURE__ */ jsxs("div", { className: style$9.container, children: [
    /* @__PURE__ */ jsx("h3", { children: "Для отримання консультації заповніть цю форму:" }),
    /* @__PURE__ */ jsx("p", { children: "Ми проконсультуємо Вас з усіх питань, що Вас цікавлять та допоможемо розібратись у Вашій справі" })
  ] });
};
const container$7 = "_container_ps0a4_1";
const blockForGroup = "_blockForGroup_ps0a4_89";
const blockForInput = "_blockForInput_ps0a4_185";
const icon = "_icon_ps0a4_235";
const iconStyle = "_iconStyle_ps0a4_249";
const yellowIcon = "_yellowIcon_ps0a4_257";
const style$8 = {
  container: container$7,
  blockForGroup,
  blockForInput,
  icon,
  iconStyle,
  yellowIcon
};
const FormAdvice = () => {
  let data = {};
  const inputName = useRef();
  const inputEmail = useRef();
  const inputContent = useRef();
  const optionPrefixOfPhone = useRef();
  const inputNumberPhone = useRef();
  let numberOfPhone = "";
  const [blockButton, setBlockButton] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [displayReCaptcha, setDisplayReCaptcha] = useState(false);
  function sendData(event) {
    event.preventDefault();
    numberOfPhone = optionPrefixOfPhone.current.textContent + inputNumberPhone.current.value;
    inputNumberPhone.current.reportValidity();
    data = CreateAObj();
    setBlockButton(true);
    axios.post("https://api.powepeople.com/website-data/contactForm", data).then((resp) => {
      toast.success("Повідомлення вислане! Очікуйте відповіді");
      inputName.current.value = "";
      inputEmail.current.value = "";
      inputContent.current.value = "";
      optionPrefixOfPhone.current.value = "";
      inputNumberPhone.current.value = "";
    }).catch((error) => {
      toast.error("Повідомлення не було відправлене");
    }).finally(() => {
      setBlockButton(false);
      setCaptcha("");
      recaptchaRef.current.reset();
    });
  }
  function CreateAObj() {
    return {
      name: inputName.current.value,
      email: inputEmail.current.value,
      numberOfPhone,
      content: inputContent.current.value,
      reCaptcha: captcha
    };
  }
  function validate() {
    inputNumberPhone.current.setCustomValidity("");
    if (isNaN(inputNumberPhone.current.value)) {
      inputNumberPhone.current.setCustomValidity("Номер телефону складається із цифр");
    }
  }
  const recaptchaRef = useRef();
  function solve(event) {
    setCaptcha(event);
  }
  return /* @__PURE__ */ jsx("div", { className: style$8.container, children: /* @__PURE__ */ jsxs("form", { onSubmit: sendData, onKeyPress: () => setDisplayReCaptcha(true), children: [
    /* @__PURE__ */ jsxs("div", { className: style$8.blockForInput, children: [
      /* @__PURE__ */ jsx("div", { className: style$8.icon, children: /* @__PURE__ */ jsx(
        FontAwesomeIcon,
        {
          icon: faUser,
          className: style$8.iconStyle
        }
      ) }),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Ім’я", required: true, ref: inputName })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$8.blockForInput, children: [
      /* @__PURE__ */ jsx("div", { className: style$8.icon, children: /* @__PURE__ */ jsx(
        FontAwesomeIcon,
        {
          icon: faEnvelope,
          className: style$8.iconStyle
        }
      ) }),
      /* @__PURE__ */ jsx("input", { type: "email", placeholder: "E-mail", required: true, ref: inputEmail })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$8.blockForGroup, children: [
      /* @__PURE__ */ jsxs("select", { ref: optionPrefixOfPhone, children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "+380" }),
        /* @__PURE__ */ jsx("option", { value: "", children: "+48" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style$8.blockForInput, children: [
        /* @__PURE__ */ jsx("div", { className: style$8.icon, children: /* @__PURE__ */ jsx(
          FontAwesomeIcon,
          {
            icon: faPhone,
            className: style$8.iconStyle
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Номер телефону",
            required: true,
            minLength: 9,
            maxLength: 9,
            ref: inputNumberPhone
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style$8.blockForInput, children: [
      /* @__PURE__ */ jsx("div", { className: style$8.icon, style: { alignItems: "flex-start", padding: " 12px 7px" }, children: /* @__PURE__ */ jsx(
        FontAwesomeIcon,
        {
          icon: faPen,
          className: style$8.iconStyle
        }
      ) }),
      /* @__PURE__ */ jsx("textarea", { placeholder: "Текст повідомлення", required: true, ref: inputContent })
    ] }),
    /* @__PURE__ */ jsx(ComponentMainButton, { disabled: blockButton || captcha.length < 10 && displayReCaptcha, content: "Надіслати", color: "#E5C201", clickEvent: validate }),
    displayReCaptcha && /* @__PURE__ */ jsx(
      ReCAPTCHA,
      {
        ref: recaptchaRef,
        sitekey: "6Le7CJQpAAAAAGf58WqRrQndYfQib7NTS8GlDoO4",
        onChange: (event) => solve(event),
        onExpired: () => setCaptcha(""),
        badge: "inline",
        required: true
      }
    )
  ] }) });
};
const Advice = (props) => {
  const imageId = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates.advice) == null ? void 0 : _a.imageId;
  });
  if (!imageId) {
    return "";
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: style$a.container,
      id: "advice",
      ref: props.advice,
      style: { backgroundImage: `url(${"https://api.powepeople.com/files/" + imageId})` },
      children: [
        /* @__PURE__ */ jsx(Content, {}),
        /* @__PURE__ */ jsx(FormAdvice, {}),
        /* @__PURE__ */ jsx("div", { className: style$a.blueBackground })
      ]
    }
  );
};
const container$6 = "_container_152k8_1";
const style$7 = {
  container: container$6
};
const mainContainer$1 = "_mainContainer_pd6xz_1";
const container$5 = "_container_pd6xz_17";
const blockForBtns = "_blockForBtns_pd6xz_99";
const btnKnowMore = "_btnKnowMore_pd6xz_111";
const btnMakeADonation = "_btnMakeADonation_pd6xz_125";
const btn = "_btn_pd6xz_111";
const style$6 = {
  mainContainer: mainContainer$1,
  container: container$5,
  blockForBtns,
  btnKnowMore,
  btnMakeADonation,
  btn
};
const ComponentForBackgroundImage = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const imageSrc = useSelector((state) => state.websiteDates.websiteDates.header.bannerId);
  function displaySubpageAbout() {
    navigate("/aboutUs");
  }
  function displaySubpageDonat() {
    navigate("/donat");
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: style$6.mainContainer,
      style: { backgroundImage: `url(${"https://api.powepeople.com/files/" + imageSrc})` },
      children: /* @__PURE__ */ jsxs("div", { className: style$6.container, children: [
        /* @__PURE__ */ jsx("h2", { children: data.titleOfCategoryOfWebsite }),
        /* @__PURE__ */ jsx("h1", { children: data.titleOfWebsite }),
        /* @__PURE__ */ jsxs("div", { className: style$6.blockForBtns, children: [
          /* @__PURE__ */ jsx(
            ComponentMainButton,
            {
              styleClass: style$6.btn,
              content: "Дізнатися більше",
              color: "#FAC000",
              clickEvent: displaySubpageAbout
            }
          ),
          /* @__PURE__ */ jsx(
            ComponentMainButton,
            {
              styleClass: style$6.btn,
              content: "Зробити пожертву",
              color: "#1265A8",
              clickEvent: displaySubpageDonat
            }
          )
        ] })
      ] })
    }
  );
};
const Header = () => {
  const dataOfHeader = useSelector((state) => state.websiteDates.websiteDates.header);
  if (!dataOfHeader) {
    return "";
  }
  return /* @__PURE__ */ jsx("div", { className: style$7.container, children: /* @__PURE__ */ jsx(ComponentForBackgroundImage, { data: dataOfHeader }) });
};
const DefaultPanel = (props) => {
  const navigate = useNavigate();
  const advice = useRef();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  function desplaySubPageDetails() {
    navigate("/details");
  }
  function scrollToElement() {
    animateScroll.scrollTo(advice.current.offsetTop - 54, {
      duration: 1e3,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  if (isClient) {
    lazy(() => import("./assets/Map-JH-F4KxJ.js"));
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(AboutUs, {}),
    /* @__PURE__ */ jsx(DonationAndAdvice, { title: "Консультація онлайн", onClickEvent: scrollToElement }),
    /* @__PURE__ */ jsx(AspectsOfTheProject, {}),
    /* @__PURE__ */ jsx(DonationAndAdvice, { title: "Зробити пожертвування", onClickEvent: desplaySubPageDetails }),
    /* @__PURE__ */ jsx(OurProjects, {}),
    /* @__PURE__ */ jsx(Advice, { advice }),
    isClient ? /* @__PURE__ */ jsx("map", {}) : ""
  ] });
};
const container$4 = "_container_1xn1b_1";
const style$5 = {
  container: container$4
};
const ContentAboutUsFully = () => {
  const data = useSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.websiteDates) == null ? void 0 : _a.websiteDates) == null ? void 0 : _b.aboutUs;
  });
  if (!data) {
    return "";
  }
  return /* @__PURE__ */ jsxs("div", { className: style$5.container, children: [
    /* @__PURE__ */ jsx("h2", { children: data.titleOfHeading }),
    /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data.fullDescription } })
  ] });
};
const container$3 = "_container_nve1h_1";
const arrow$1 = "_arrow_nve1h_21";
const style$4 = {
  container: container$3,
  arrow: arrow$1
};
const AboutUsFully = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.aboutUs;
  });
  if (!data) {
    return "";
  }
  function displayOneStepAgo() {
    navigate(-1);
  }
  return /* @__PURE__ */ jsxs("div", { className: "containerForSubPage", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: style$4.container, children: [
      /* @__PURE__ */ jsx(ContentAboutUsFully, {}),
      /* @__PURE__ */ jsx("img", { src: "https://api.powepeople.com/files/" + data.imgId, role: "presentation", alt: "" })
    ] }),
    /* @__PURE__ */ jsx(ArrowBack, { className: style$4.arrow, onClickEvent: displayOneStepAgo })
  ] });
};
const backgroundWithTitle = "_backgroundWithTitle_8fp5r_1";
const container$2 = "_container_8fp5r_27";
const containerForContentAndBtn = "_containerForContentAndBtn_8fp5r_38";
const blockForBtn = "_blockForBtn_8fp5r_62";
const style$3 = {
  backgroundWithTitle,
  container: container$2,
  containerForContentAndBtn,
  blockForBtn
};
const ChoosedAspect = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();
  const imageId = useSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.aboutUs) == null ? void 0 : _b.imgId;
  });
  function displayOneStepAgo() {
    navigate(-1);
  }
  function displaySubPage() {
    navigate("/donat");
  }
  useEffect(() => {
    axios("https://api.powepeople.com/aspects/" + id).then(
      (resp) => {
        setData(resp.data);
      }
    ).catch((err) => {
      navigate("/error");
    });
  }, [id]);
  if (!data) {
    return "";
  }
  if (!imageId) {
    return "";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx("div", { className: style$3.backgroundWithTitle, children: /* @__PURE__ */ jsx("h2", { children: data.title }) }),
    /* @__PURE__ */ jsxs("div", { className: "containerForSubPage withImage", children: [
      /* @__PURE__ */ jsx(ArrowBack, { top: "-10px", onClickEvent: displayOneStepAgo }),
      /* @__PURE__ */ jsxs("div", { className: style$3.container, children: [
        /* @__PURE__ */ jsxs("div", { className: style$3.containerForContentAndBtn, children: [
          /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data.content } }),
          /* @__PURE__ */ jsx("div", { className: style$3.blockForBtn, children: /* @__PURE__ */ jsx(
            ComponentMainButton,
            {
              content: "Долучитися до пожертви",
              color: "#F3CE03",
              clickEvent: displaySubPage
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("img", { src: "https://api.powepeople.com/files/" + imageId, role: "presentation", alt: "" })
      ] })
    ] })
  ] });
};
const mainContainer = "_mainContainer_mrcob_1";
const blockForTitleAndOther = "_blockForTitleAndOther_mrcob_25";
const blockForOnlineDonat = "_blockForOnlineDonat_mrcob_113";
const arrow = "_arrow_mrcob_225";
const style$2 = {
  mainContainer,
  blockForTitleAndOther,
  blockForOnlineDonat,
  arrow
};
const Donat = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    var _a;
    return (_a = state.websiteDates.websiteDates) == null ? void 0 : _a.takeAdonat;
  });
  if (!data) {
    return "";
  }
  function displayOneStepAgo() {
    navigate(-1);
  }
  return /* @__PURE__ */ jsxs("div", { className: "containerForSubPage", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: style$2.mainContainer, children: [
      /* @__PURE__ */ jsxs("div", { className: style$2.blockForTitleAndOther, children: [
        /* @__PURE__ */ jsx("h4", { children: "БЛАГОДІЙНИЙ ФОНД - МОГУТНІСТЬ НАРОДУ" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://api.powepeople.com/files/" + data.imageId,
            role: "presentation",
            alt: ""
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style$2.blockForOnlineDonat, children: [
        /* @__PURE__ */ jsx("h5", { children: "пожертвувати онлайн" }),
        /* @__PURE__ */ jsx("a", { style: { textDecoration: "none" }, target: "_blank", href: "https://payhub.com.ua/#/payment/c-98872", children: /* @__PURE__ */ jsx("button", { style: { width: "100%" }, children: "Долучитися до пожертвування" }) }),
        /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: data.description } })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ArrowBack, { onClickEvent: displayOneStepAgo, className: style$2.arrow })
  ] });
};
const container$1 = "_container_1ls7w_1";
const containerForBackGroundAndNumber = "_containerForBackGroundAndNumber_1ls7w_17";
const containerForBackGround = "_containerForBackGround_1ls7w_17";
const spanErrorNumber = "_spanErrorNumber_1ls7w_81";
const mainSpan = "_mainSpan_1ls7w_173";
const style$1 = {
  container: container$1,
  containerForBackGroundAndNumber,
  containerForBackGround,
  spanErrorNumber,
  mainSpan
};
const ErrorComponent = () => {
  const navigate = useNavigate();
  function displayHome() {
    navigate("/");
  }
  return /* @__PURE__ */ jsxs("div", { className: style$1.container, children: [
    /* @__PURE__ */ jsxs("div", { className: style$1.containerForBackGroundAndNumber, children: [
      /* @__PURE__ */ jsx("span", { className: style$1.spanErrorNumber, children: "500" }),
      /* @__PURE__ */ jsx("div", { className: style$1.containerForBackGround })
    ] }),
    /* @__PURE__ */ jsx("span", { className: style$1.mainSpan, children: "Вибачте за тимчасові незручності. Сталася внутрішня помилка сервера. Наша команда вже працює над вирішенням цього питання. Дякуємо за ваше розуміння та терпіння." }),
    /* @__PURE__ */ jsx("button", { onClick: displayHome, children: "головна сторінка" })
  ] });
};
const container = "_container_1dbrp_1";
const style = {
  container
};
const errorImg = "/assets/errorUA-BB3_7KpK.jpg";
const Error404Component = () => {
  const navigate = useNavigate();
  function displayMainPage() {
    navigate("/");
  }
  return /* @__PURE__ */ jsxs("div", { className: style.container, children: [
    /* @__PURE__ */ jsx("img", { src: errorImg, alt: "error 404" }),
    /* @__PURE__ */ jsx("span", { children: "Сторінка не знайдена" }),
    /* @__PURE__ */ jsx("button", { onClick: displayMainPage, children: "головна сторінка" })
  ] });
};
const Router = () => {
  return /* @__PURE__ */ jsxs(Routes, { basepatch: "/", children: [
    /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(DefaultPanel$1, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(DefaultPanel, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/aboutUs", element: /* @__PURE__ */ jsx(AboutUsFully, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/aspects", element: /* @__PURE__ */ jsx(AspectsOfTheProject, { allAspects: true }) }),
      /* @__PURE__ */ jsx(Route, { path: "/projects", element: /* @__PURE__ */ jsx(OurProjects, { allProjects: true }) }),
      /* @__PURE__ */ jsx(Route, { path: "/aspect/:id", element: /* @__PURE__ */ jsx(ChoosedAspect, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/project/:id", element: /* @__PURE__ */ jsx(ChoosedProject, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/details", element: /* @__PURE__ */ jsx(Details, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/donat", element: /* @__PURE__ */ jsx(Donat, {}) })
    ] }),
    /* @__PURE__ */ jsx(Route, { path: "/error", element: /* @__PURE__ */ jsx(ErrorComponent, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Error404Component, {}) })
  ] });
};
function App(props) {
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsxs(Provider, { store, children: [
    /* @__PURE__ */ jsx(Router, {}),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] }) });
}
const render = ({ path, context }) => {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(UserContext.Provider, { value: context, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
};
export {
  render
};
