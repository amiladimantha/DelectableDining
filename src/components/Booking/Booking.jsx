import React from "react";
import { Form, Input, DatePicker, TimePicker, Button, Modal } from "antd";
import moment from "moment";
import './Booking.css';

const BookingForm = ({visible, onCancel}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    // Handle form submission logic here
  };

  return (
    <Modal
      title="Book a Table"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Book now
        </Button>,
      ]}
      className="booking-form"
    >
        <br />
      <Form form={form} name="bookingForm">
        <Form.Item
          name="partySize"
          label="Party Size"
          rules={[
            {
              required: true,
              message: "Please enter the party size",
            },
          ]}
        >
          <Input type="number" min={1} />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Please select a date",
            },
          ]}
        >
          <DatePicker
          style={{ width: "100%" }}
            format="YYYY-MM-DD"
            disabledDate={(current) =>
              current && current < moment().startOf("day")
            }
          />
        </Form.Item>
        <Form.Item
          name="time"
          label="Time"
          rules={[
            {
              required: true,
              message: "Please select a time",
            },
          ]}
        >
          <TimePicker 
          style={{ width: "100%" }}
          format="HH:mm" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingForm;
