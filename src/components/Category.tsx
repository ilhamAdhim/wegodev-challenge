import { CSSProperties, ReactChild, useContext } from 'react';
import { Divider } from 'antd';
import { ContextValue, NewsContext } from '../contexts/NewsContext';

interface ICategory {
    name: string,
    icon: ReactChild
}

const Category = (props: ICategory) => {

    // ? category as readonly data and we use getCurrentCategory to update the selected category 
    const { currentCategory, getCurrentCategory } = useContext<ContextValue>(NewsContext);

    // ? Event Handler that updates the category context from '../contexts/NewsContext'
    const changeCategory = () => { getCurrentCategory(props.name) }

    // ? Styles
    const selectedCategoryStyle: CSSProperties = { fontSize: '1.2em', fontWeight: 'bold' }
    const normalCategoryStyle: CSSProperties = { fontSize: '1.1em' }

    return (
        <>
            <div style={currentCategory === props.name ? selectedCategoryStyle : normalCategoryStyle} onClick={changeCategory}>
                <span style={{ marginRight: '1em' }}>
                    {props.icon}
                </span>
                {props.name}
                <Divider />
            </div>
        </>
    );
};


export default Category;