import "./Stack.scss";
import { Link } from "react-router-dom";
import stackData from "../../data/stack/stack.json";
import { iconsMap } from "../../assets/svgs/skill/index";
import { StackData, StackItem } from "../../types/stackTypes";


const Stack: React.FC = () => {
    const data = stackData as StackData;

    return (
        <>
            <section id="stack" className="stack">
                <header className="stack__header">
                    <h2 className="stack__header-title">Stack</h2>
                </header>

                <div className="stack__grid">
                    {Object.entries(data).map(([category, items]) => (
                        <article className="stack__container" key={category}>
                            <header className="stack__container-header">
                                <h3 className="stack__container-header-title">{category}</h3>
                            </header>

                            <ul className="stack__list">
                                {items.map((item: StackItem) => {
                                    const Icon = iconsMap[item.icon as keyof typeof iconsMap];

                                    return (
                                        <li className="stack__list-item" key={item.id}>
                                            <Link to={item.link} className="stack__list-link">
                                                <Icon className="stack__list-icon" />
                                                <span className="stack__list-label">{item.text}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Stack;
