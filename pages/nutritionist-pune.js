import CoupleDietPlan from '@/Components/CoupleDietPlan'
import MensDietPlan from '@/Components/MensDietPlan'
import HealthConditionDiet from '@/Components/HealthConditionDiet'
import WomenDietPlan from '@/Components/WomenDietPlan'
import React from 'react'
import Head from 'next/head'

const NutritionistPune = () => {
    return (
        <div>
            <Head>
                <title>Best Nutritionist in Pune | Weightloss Diet Plans & Natural Nutrition</title>
                <meta name="description" content="Nittya is a top-rated nutritionist in Pune offering diet plans for weight loss, PCOS, diabetes, thyroid, pregnancy, and more. Shop healthy, natural nutrition products too!" />
            </Head>
            <WomenDietPlan />
            <MensDietPlan />
            <CoupleDietPlan />
            <HealthConditionDiet />
        </div>
    )
}

export default NutritionistPune