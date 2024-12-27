import { useState } from "react";
import { Button, Checkbox, ConfigProvider, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import SelectActivity from "./SelectActivity";
import { toggleCheckbox } from "../features/epiSlice/epiSlice";

function EpiForm() {
    const isChecked = useSelector((state) => state.epis.isChecked);
    const showComponents = useSelector((state) => state.epis.showComponents);
    const dispatch = useDispatch();

    const [activitiesList, setActivitiesList] = useState([0]);

    const addActivity = () => {
        setActivitiesList((prevActivities) => [
            ...prevActivities,
            prevActivities.length,
        ]);
    };

    const removeActivity = (index) => {
        setActivitiesList((prevActivities) =>
            prevActivities.filter((_, i) => i !== index)
        );
    };

    const handleCheckboxChange = () => {
        dispatch(toggleCheckbox());
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#649FBF",
                    borderRadius: 10,
                    colorBorder: "#649FBF",
                    colorBgContainer: "transparent",
                    defaultColor: "#649FBF",
                },
            }}
        >
            <div className="w-full border-2 border-[color:var(--Default,#649FBF)] rounded-2xl p-6">
                <Typography.Title level={5}>
                    Quais EPIs o trabalhador usa na atividade?
                </Typography.Title>
                <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{
                        marginBottom: "10px",
                        fontWeight: 600,
                        display: "flex",
                    }}
                >
                    O trabalhador não usa EPI
                </Checkbox>

                {showComponents &&
                    activitiesList.map((_, index) => (
                        <div key={index} className="mb-4">
                            <SelectActivity
                                onRemove={() => removeActivity(index)}
                            />
                        </div>
                    ))}

                {showComponents && (
                    <Button
                        onClick={addActivity}
                        type="ghost"
                        className="w-full mt-4"
                        style={{
                            border: "2px solid #649FBF",
                        }}
                    >
                        Adicionar outra atividade
                    </Button>
                )}
            </div>
        </ConfigProvider>
    );
}

export default EpiForm;
