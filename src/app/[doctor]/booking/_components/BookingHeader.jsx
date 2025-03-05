import React from "react";

import {
  Breadcrumb,
//   BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export function BookingHeader() {
  return (
    <div name="bg-secondary space-y-4 p-4 text-center">
        <h1 className="text-4xl font-bold text-center bg-secondary">Booking</h1>
      <Breadcrumb className="bg-secondary space-y-4 p-4 text-center flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Booking</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
