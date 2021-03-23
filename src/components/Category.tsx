import { CSSProperties, ReactChild } from 'react';
import { Divider } from 'antd';

interface ICategory {
    name: string,
    status?: 'selected' | 'normal',
    icon: ReactChild
}

const Category = (props: ICategory) => {

    const selectedCategoryStyle: CSSProperties = {
        fontWeight: 'bold',
    }

    const normalCategoryStyle: CSSProperties = {
        fontSize: '1.2em'
    }

    return (
        <>
            <div style={props.status === 'selected' ? selectedCategoryStyle : normalCategoryStyle}>
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