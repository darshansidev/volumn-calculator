import React, { useEffect, useState } from 'react';
import VolumeTypeDropdown from '../common/VolumeTypeDropdown';
import convert from 'convert-units';



const Spheres = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const [unit, setUnit] = useState('meters');
    const [unitOne, setUnitOne] = useState('meters');
    const [unitTwo, setUnitTwo] = useState('meters');
    const [volume, setVolume] = useState(null);

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    };

    const handleWidthChange = (e) => {
        setWidth(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    // 111111111111111111111111111111
    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };
    // 111111111111111111111111111111
    const handleUnitOneChange = (e) => {
        setUnitOne(e.target.value);
    };
    // 111111111111111111111111111111
    const handleUnitTwoChange = (e) => {
        setUnitTwo(e.target.value);
    };

    const calculateVolume = () => {
        const l = convertToMeters(length, unit);
        const w = convertToMeters(width, unitOne);
        const h = convertToMeters(height, unitTwo);

        console.log(l, "<--------->", w, "<---------------------->", h)

        if (isNaN(l) || isNaN(w) || isNaN(h)) {
            setVolume(null);
            return;
        }

        const calculatedVolume = l * w * h;
        setVolume(calculatedVolume);
    };

    const convertToMeters = (value, unit) => {
        switch (unit) {
            case 'miles':
                return parseFloat(value) * 1609.34; // 1 mile = 1609.34 meters
            case 'yards':
                return parseFloat(value) * 0.9144; // 1 yard = 0.9144 meters
            case 'feet':
                return parseFloat(value) * 0.3048; // 1 foot = 0.3048 meters
            case 'inches':
                return parseFloat(value) * 0.0254; // 1 inch = 0.0254 meters
            case 'kilometers':
                return parseFloat(value) * 1000; // 1 kilometer = 1000 meters
            case 'meters':
                return parseFloat(value);
            case 'centimeters':
                return parseFloat(value) * 0.01; // 1 centimeter = 0.01 meters
            case 'millimeters':
                return parseFloat(value) * 0.001; // 1 millimeter = 0.001 meters
            case 'micrometers':
                return parseFloat(value) * 0.000001; // 1 micrometer = 0.000001 meters
            case 'nanometers':
                return parseFloat(value) * 0.000000001; // 1 nanometer = 0.000000001 meters
            case 'angstroms':
                return parseFloat(value) * 0.0000000001; // 1 angstrom = 0.0000000001 meters
            default:
                return NaN;
        }
    };

    return (
        <div>
            <h2>Rectangular Tank Volume Calculator</h2>
            <table>
                <tbody>
                    <tr>
                        <td align="right">Length (l)</td>
                        <td>
                            <input type="text" value={length} onChange={handleLengthChange} className="inhalf" />
                            <select value={unit} onChange={handleUnitChange}>
                                <option value="miles">miles</option>
                                <option value="yards">yards</option>
                                <option value="feet">feet</option>
                                <option value="inches">inches</option>
                                <option value="kilometers">kilometers</option>
                                <option value="meters">meters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="millimeters">millimeters</option>
                                <option value="micrometers">micrometers</option>
                                <option value="nanometers">nanometers</option>
                                <option value="angstroms">angstroms</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Width (w)</td>
                        <td>
                            <input type="text" value={width} onChange={handleWidthChange} className="inhalf" />
                            <select value={unitOne} onChange={handleUnitOneChange}>
                                <option value="miles">miles</option>
                                <option value="yards">yards</option>
                                <option value="feet">feet</option>
                                <option value="inches">inches</option>
                                <option value="kilometers">kilometers</option>
                                <option value="meters">meters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="millimeters">millimeters</option>
                                <option value="micrometers">micrometers</option>
                                <option value="nanometers">nanometers</option>
                                <option value="angstroms">angstroms</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">Height (h)</td>
                        <td>
                            <input type="text" value={height} onChange={handleHeightChange} className="inhalf" />
                            <select value={unitTwo} onChange={handleUnitTwoChange}>
                                <option value="miles">miles</option>
                                <option value="yards">yards</option>
                                <option value="feet">feet</option>
                                <option value="inches">inches</option>
                                <option value="kilometers">kilometers</option>
                                <option value="meters">meters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="millimeters">millimeters</option>
                                <option value="micrometers">micrometers</option>
                                <option value="nanometers">nanometers</option>
                                <option value="angstroms">angstroms</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={calculateVolume}>Calculate Volume</button>
            {volume !== null && <p>Volume: {volume}</p>}
        </div>
    );
}

export default Spheres

/*
import React, { useState } from 'react';

function RectangularTankVolumeCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('meters');
  const [volume, setVolume] = useState(null);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateVolume = () => {
    const l = convertToMeters(length, unit);
    const w = convertToMeters(width, unit);
    const h = convertToMeters(height, unit);

    if (isNaN(l) || isNaN(w) || isNaN(h)) {
      setVolume(null);
      return;
    }

    const calculatedVolume = l  w  h;
    setVolume(calculatedVolume);
  };

  const convertToMeters = (value, unit) => {
    switch (unit) {
      case 'miles':
        return parseFloat(value) * 1609.34; // 1 mile = 1609.34 meters
      case 'yards':
        return parseFloat(value) * 0.9144; // 1 yard = 0.9144 meters
      case 'feet':
        return parseFloat(value) * 0.3048; // 1 foot = 0.3048 meters
      case 'inches':
        return parseFloat(value) * 0.0254; // 1 inch = 0.0254 meters
      case 'kilometers':
        return parseFloat(value) * 1000; // 1 kilometer = 1000 meters
      case 'meters':
        return parseFloat(value);
      case 'centimeters':
        return parseFloat(value) * 0.01; // 1 centimeter = 0.01 meters
      case 'millimeters':
        return parseFloat(value) * 0.001; // 1 millimeter = 0.001 meters
      case 'micrometers':
        return parseFloat(value) * 0.000001; // 1 micrometer = 0.000001 meters
      case 'nanometers':
        return parseFloat(value) * 0.000000001; // 1 nanometer = 0.000000001 meters
      case 'angstroms':
        return parseFloat(value) * 0.0000000001; // 1 angstrom = 0.0000000001 meters
      default:
        return NaN;
    }
  };

  return (
    <div>
      <h2>Rectangular Tank Volume Calculator</h2>
      <table>
        <tbody>
          <tr>
            <td align="right">Length (l)</td>
            <td>
              <input type="text" value={length} onChange={handleLengthChange} className="inhalf" />
              <select value={unit} onChange={handleUnitChange}>
                <option value="miles">miles</option>
                <option value="yards">yards</option>
                <option value="feet">feet</option>
                <option value="inches">inches</option>
                <option value="kilometers">kilometers</option>
                <option value="meters">meters</option>
                <option value="centimeters">centimeters</option>
                <option value="millimeters">millimeters</option>
                <option value="micrometers">micrometers</option>
                <option value="nanometers">nanometers</option>
                <option value="angstroms">angstroms</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">Width (w)</td>
            <td>
              <input type="text" value={width} onChange={handleWidthChange} className="inhalf" />
              <select value={unit} onChange={handleUnitChange}>
                <option value="miles">miles</option>
                <option value="yards">yards</option>
                <option value="feet">feet</option>
                <option value="inches">inches</option>
                <option value="kilometers">kilometers</option>
                <option value="meters">meters</option>
                <option value="centimeters">centimeters</option>
                <option value="millimeters">millimeters</option>
                <option value="micrometers">micrometers</option>
                <option value="nanometers">nanometers</option>
                <option value="angstroms">angstroms</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">Height (h)</td>
            <td>
              <input type="text" value={height} onChange={handleHeightChange} className="inhalf" />
              <select value={unit} onChange={handleUnitChange}>
                <option value="miles">miles</option>
                <option value="yards">yards</option>
                <option value="feet">feet</option>
                <option value="inches">inches</option>
                <option value="kilometers">kilometers</option>
                <option value="meters">meters</option>
                <option value="centimeters">centimeters</option>
                <option value="millimeters">millimeters</option>
                <option value="micrometers">micrometers</option>
                <option value="nanometers">nanometers</option>
                <option value="angstroms">angstroms</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={calculateVolume}>Calculate Volume</button>
      {volume !== null && <p>Volume: {volume}</p>}
    </div>
  );
}

export default RectangularTankVolumeCalculator;

*/