import React from "react";
import Card from "./components/card";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/google.svg",
      companyName: "Google",
      jobTitle: "UI/UX Designer",
      datePosted: "5 days ago",
      postTag: "Full Time",
      levelTag: "Junior Level",
      payUSD: "$80/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/apple.svg",
      companyName: "Apple",
      jobTitle: "Product Design Intern",
      datePosted: "2 weeks ago",
      postTag: "Intern",
      levelTag: "Entry Level",
      payUSD: "$35/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/amazon.svg",
      companyName: "Amazon",
      jobTitle: "Frontend Developer",
      datePosted: "10 days ago",
      postTag: "Full Time",
      levelTag: "Mid Level",
      payUSD: "$90/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/meta.svg",
      companyName: "Meta",
      jobTitle: "Senior UI Engineer",
      datePosted: "3 weeks ago",
      postTag: "Part Time",
      levelTag: "Senior Level",
      payUSD: "$120/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/netflix.svg",
      companyName: "Netflix",
      jobTitle: "UX Researcher",
      datePosted: "1 week ago",
      postTag: "Full Time",
      levelTag: "Senior Level",
      payUSD: "$140/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoft.svg",
      companyName: "Microsoft",
      jobTitle: "UI Developer",
      datePosted: "4 days ago",
      postTag: "Full Time",
      levelTag: "Junior Level",
      payUSD: "$75/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tesla.svg",
      companyName: "Tesla",
      jobTitle: "Interaction Designer",
      datePosted: "6 weeks ago",
      postTag: "Contract",
      levelTag: "Mid Level",
      payUSD: "$95/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/adobe.svg",
      companyName: "Adobe",
      jobTitle: "UX Designer",
      datePosted: "8 days ago",
      postTag: "Full Time",
      levelTag: "Mid Level",
      payUSD: "$85/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/oracle.svg",
      companyName: "Oracle",
      jobTitle: "Product Designer",
      datePosted: "10 weeks ago",
      postTag: "Full Time",
      levelTag: "Senior Level",
      payUSD: "$110/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/ibm.svg",
      companyName: "IBM",
      jobTitle: "UI/UX Intern",
      datePosted: "12 days ago",
      postTag: "Intern",
      levelTag: "Entry Level",
      payUSD: "$30/hr",
      location: "India, Mumbai"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/samsung.svg",
      companyName: "Samsung",
      jobTitle: "UX Designer",
      datePosted: "3 days ago",
      postTag: "Full Time",
      levelTag: "Mid Level",
      payUSD: "$88/hr",
      location: "India, Bangalore"
    }
  ];



  return (
    <div className="parent">
      {jobOpenings.map((elem, index) => (
        <Card
          key={index}
          brandLogo={elem.brandLogo}
          companyName={elem.companyName}
          jobTitle={elem.jobTitle}
          datePosted={elem.datePosted}
          postTag={elem.postTag}
          levelTag={elem.levelTag}
          payUSD={elem.payUSD}
          location={elem.location}
        />
      ))}
    </div>
  );
};

export default App;
