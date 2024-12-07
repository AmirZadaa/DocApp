import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";

export default  function SuccessHeader() {
  return (
    <div name="bg-secondary space-y-4 p-4 text-center">
        <h1 className="text-2xl font-bold text-center bg-secondary">Booking Success</h1>
      <Breadcrumb className="bg-secondary space-y-4 p-4 text-center flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/doctor-list">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Booking success</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
