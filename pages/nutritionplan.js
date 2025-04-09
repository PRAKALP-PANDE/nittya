import DetoxWeightLoss from '@/Components/DetoxWeightLoss'
import FitnessnLifestyle from '@/Components/FitnessnLifestyle'
import HealthConditionDiet from '@/Components/HealthConditionDiet'
import React from 'react'

const NutritionPlan = () => {
    return (
        <div>
            <FitnessnLifestyle />
            <DetoxWeightLoss />
            <HealthConditionDiet />
        </div>
    )
}

export default NutritionPlan