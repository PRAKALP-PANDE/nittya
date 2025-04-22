import MensDietPlan from '@/Components/DetoxWeightLoss'
import HealthConditionDiet from '@/Components/HealthConditionDiet'
import WomenDietPlan from '@/Components/WomenDietPlan'
import React from 'react'

const NutritionPlan = () => {
    return (
        <div>
            <WomenDietPlan />
            <MensDietPlan />
            <HealthConditionDiet />
        </div>
    )
}

export default NutritionPlan