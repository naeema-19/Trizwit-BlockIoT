import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
      </svg>
    ),
    title: "Sign up for BlockIoT",
    paragraph:
      "The first step to using our powerful IoT backend services is to sign up for BlockIoT. Simply visit our website and create an account. You'll have access to our customisable IoT broker and user-friendly dashboard in no time.",
  },
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
      </svg>
    ),
    title: " Set up your customised IoT broker / Choose from a wide list of templates",
    paragraph:
      "Once you've created your account, it's time to set up your customised IoT broker. With our platform, you can tailor your server to your exact needs. Choose from a range of features and settings to create a server that works for you. And if you ever need to make changes, you can easily do so from our user-friendly dashboard.",
  },
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
      </svg>
    ),
    title: " Connect your IoT devices",
    paragraph:
      "Now that your IoT broker is up and running, it's time to connect your IoT devices. Our platform supports a range of protocols and devices, so you can be confident that your devices will work seamlessly with our backend services. And if you ever encounter any issues, our support team is always here to help.",
  },
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
        <path d="M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z"/>
      </svg>
    ),
    title: "Monitor and manage your IoT servers",
    paragraph:
      "With our super cool dashboard interface, you can easily monitor and manage your IoT servers. Even if you don't have much technical knowledge, you'll find our dashboard to be intuitive and easy to use. You can keep an eye on your devices, manage your settings, and make changes as needed.",
  },
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
      </svg>
    ),
    title: "Scale your infrastructure as needed",
    paragraph:
      "As your IoT product grows, so does our platform. Our scalable infrastructure means you can easily add more devices and users as needed. And if you need to make any changes to your server configuration, you can do so without any downtime.",
  },
  
];
export default featuresData;
