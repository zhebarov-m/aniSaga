import React from 'react';
import {useTranslation} from "react-i18next";

const FaqPage = () => {
    const {t} = useTranslation('questions')
    return (
        <div>
            {t("Вопросы")}
        </div>
    );
};

export default FaqPage;