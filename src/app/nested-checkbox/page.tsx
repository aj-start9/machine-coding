'use client'

import { useState } from "react"

const initialCheckboxJson = [
  {
    id: '1',
    isChecked: false,
    name: 'Checkbox 1',
    nestedCheckbox: [
      {
        id: '1-1',
        isChecked: false,
        name: 'CheckBox 2',
        nestedCheckbox: [
          {
            id: '1-1-1',
            isChecked: false,
            name: 'CheckBox 9',
            nestedCheckbox: [
              { id: '1-1-1-1', isChecked: false, name: 'CheckBox 11' },
              { id: '1-1-1-2', isChecked: false, name: 'CheckBox 12' },
            ],
          },
          { id: '1-2', isChecked: false, name: 'CheckBox 10' },
        ],
      },
      { id: '1-2', isChecked: false, name: 'CheckBox 3' },
      { id: '1-3', isChecked: false, name: 'CheckBox 4' },
    ],
  },
  {
    id: '4',
    isChecked: false,
    name: 'Checkbox 5',
    nestedCheckbox: [
      { id: '4-1', isChecked: false, name: 'CheckBox 6' },
      { id: '4-2', isChecked: false, name: 'CheckBox 7' },
      { id: '4-3', isChecked: false, name: 'CheckBox 8' },
    ],
  },
]

const NestedCheckbox = () => {
  const [jsonVal, setJsonVal] = useState(initialCheckboxJson)

  const updateCheckboxes = (nodes: any[], targetId: string, checked: boolean): any[] => {
    return nodes.map(node => {
      if (node.id?.startsWith(targetId)) {
        const updated = {
          ...node,
          isChecked: checked,
          nestedCheckbox: node.nestedCheckbox
            ? updateCheckboxes(node.nestedCheckbox, "", checked)
            : ''
        }
        return updated
      } else if (node.nestedCheckbox) {
        return {
          ...node,
          nestedCheckbox: updateCheckboxes(node.nestedCheckbox, targetId, checked)
        }
      }
      return node
    })
  }

  const onClickHandler = (checked: boolean, itm: any) => {
    const updated = updateCheckboxes(jsonVal, itm.id, checked)
    setJsonVal(updated)
  }

  const renderNestedCheckBox = (data: any[]) => {
    return (
      <div>
        {data.map((itm: any) => (
          <div key={itm.id || itm.name} className="mb-1 ml-2">
            <input
              onChange={(e) => onClickHandler(e.target.checked, itm)}
              type="checkbox"
              checked={itm?.isChecked}
            />
            <label className="text-black ml-2">{itm?.name}</label>
            {Array.isArray(itm?.nestedCheckbox) && (
              <div className="ml-4">
                {renderNestedCheckBox(itm.nestedCheckbox)}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white p-10 w-screen h-screen overflow-auto">
      <div className="text-3xl text-black font-bold flex justify-center mb-10 w-full">
        Nested Checkbox
      </div>
      <div className="flex justify-center">
        {renderNestedCheckBox(jsonVal)}
      </div>
    </div>
  )
}

export default NestedCheckbox
