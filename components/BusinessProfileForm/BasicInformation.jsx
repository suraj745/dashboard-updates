import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import SelectCountry from "./SelectCountry";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const BasicInformation = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <section className="container">
      <form>
        <section className="row flex-column">
          <div class="col-sm-6">
            <h5>Profile Image/Business Logo</h5>
            <Upload
              className="mt-2"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Business Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="  Business Name"
            />
          </div>
          <br />

          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Brand or Alias Name
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Brand or Alias Name
              "
            />
          </div>
          <br />

          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Country <span className="text-danger">*</span>
            </label>{" "}
            <br />
            <SelectCountry />
          </div>

          <br />
          <section className="row gap-3 mx-1">
            <span class="col-sm-2 mt-3 btn btn-primary">Submit</span>
            <span class="col-sm-2  mt-3 btn btn-danger">Reset</span>
          </section>
        </section>
      </form>
    </section>
  );
};

export default BasicInformation;
