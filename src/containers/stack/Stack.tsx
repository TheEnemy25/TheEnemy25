import "./Stack.scss";
import stackData from "../../data/stack/stack.json";
import { iconsMap } from "../../assets/svgs/skill/index";
import { StackData, StackItem } from "../../types/stackTypes";
import { useTranslation } from "react-i18next";

const Stack: React.FC = () => {
    const { t } = useTranslation();
    const data = stackData as StackData;

    return (
        <>
            <section id="stack" className="stack">
                <header className="stack__header">
                    <h2 className="stack__header-title">{t("stack.title")}</h2>
                </header>

                <div className="stack__grid">
                    {Object.entries(data).map(([category, items]) => {
                        const translatedCategory = t(`stack.${category.toLowerCase()}`);

                        return (
                            <article className="stack__container" key={category}>
                                <header className="stack__container-header">
                                    <h3 className="stack__container-header-title">{translatedCategory}</h3>
                                </header>

                                <ul className="stack__list">
                                    {items.map((item: StackItem) => {
                                        const Icon = iconsMap[item.icon as keyof typeof iconsMap];

                                        return (
                                            <li className="stack__list-item" key={item.id}>
                                                <a href={item.link} className="stack__list-link" target="_blank" rel="noopener noreferrer">
                                                    <Icon className="stack__list-icon" />
                                                    <span className="stack__list-label">{item.text}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Stack;
