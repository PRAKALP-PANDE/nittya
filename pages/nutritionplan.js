import CoupleDietPlan from '@/Components/CoupleDietPlan'
import MensDietPlan from '@/Components/MensDietPlan'
import HealthConditionDiet from '@/Components/HealthConditionDiet'
import WomenDietPlan from '@/Components/WomenDietPlan'
import React from 'react'

const NutritionPlan = () => {
    return (
        <div>
            <WomenDietPlan />
            <MensDietPlan />
            <CoupleDietPlan />
            <HealthConditionDiet />
        </div>
    )
}

export default NutritionPlan