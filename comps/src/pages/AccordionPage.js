import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const accItems = [
    { id: 1, label: "Lb1", content: "Ct1" },
    { id: 2, label: "Lb2", content: "Ct2" },
    { id: 3, label: "Lb3", content: "Ct3" },
  ];
  return <Accordion items={accItems} />;
};

export default AccordionPage;
