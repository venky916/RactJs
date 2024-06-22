import { useState } from "react";

const Section = ({ title, description, isVisible, onToggle }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <button className="cursor-pointer underline" onClick={onToggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    // Initial state is set to "about"
    const [visibleSection, setVisibleSection] = useState("about");

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>

            <Section
                title={"About InstaMart"}
                description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                }
                isVisible={visibleSection === "about"}
                onToggle={() => setVisibleSection(visibleSection === "about" ? "" : "about")}
            />

            <Section
                title={"Team InstaMart"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..."
                }
                isVisible={visibleSection === "team"}
                onToggle={() => setVisibleSection(visibleSection === "team" ? "" : "team")}
            />

            <Section
                title={"Careers"}
                description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                }
                isVisible={visibleSection === "careers"}
                onToggle={() => setVisibleSection(visibleSection === "careers" ? "" : "careers")}
            />
        </div>
    );
};

export default Instamart;
