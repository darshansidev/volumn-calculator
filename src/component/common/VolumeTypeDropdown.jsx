import React, { useState } from 'react';

const VolumeTypeDropdown = () => {
    const [volumeType, setVolumeType] = useState('milliliters');

    const handleVolumeTypeChange = (event) => {
        setVolumeType(event.target.value);
    };

    return (
        <select value={volumeType} onChange={handleVolumeTypeChange}>
            <option value="milliliters">Milliliters (mL)</option>
            <option value="liters">Liters (L)</option>
            <option value="cubic-centimeters">Cubic Centimeters (cm³)</option>
            <option value="cubic-meters">Cubic Meters (m³)</option>
            <option value="fluid-ounces">Fluid Ounces (fl oz)</option>
            <option value="gallons">Gallons (gal)</option>
        </select>
    );
};

export default VolumeTypeDropdown;