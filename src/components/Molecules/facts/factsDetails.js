import { GoSmiley } from "react-icons/go";
import { BsJournalRichtext, BsHeadset, BsPeople } from "react-icons/bs";
import PureCounter from "@srexi/purecounterjs";

const detail = [
  {
    id: "1",
    icon: GoSmiley,
    selector: "1",
    counter: new PureCounter({
      selector: ".purecounter1",
      start: 0,
      end: 20,
      duration: 1,
    }),
    title: "Happy Clients",
    desc: "satisfaction as my ultimate goal",
  },
  {
    id: "2",
    icon: BsJournalRichtext,
    selector: "2",
    counter: new PureCounter({
      selector: ".purecounter2",
      start: 0,
      end: 20,
      duration: 1,
    }),
    title: "Projects",
    desc: "Turning Ideas into Stunning Realities.",
  },
  {
    id: "3",
    icon: BsHeadset,
    selector: "3",
    counter: new PureCounter({
      selector: ".purecounter3",
      start: 0,
      end: 1453,
      duration: 1,
    }),
    title: "Hours Of Support",
    desc: "I'm always here.",
  },
  {
    id: "4",
    icon: BsPeople,
    selector: "4",
    counter: new PureCounter({
      selector: ".purecounter4",
      start: 0,
      end: 3,
      duration: 1,
    }),
    title: "Hard Workers",
    desc: "Hours Of Support.",
  },
];

export default detail;
