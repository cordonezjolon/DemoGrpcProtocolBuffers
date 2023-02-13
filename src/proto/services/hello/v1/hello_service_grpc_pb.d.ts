// package: services.hello.v1
// file: services/hello/v1/hello_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_hello_v1_hello_service_pb from "../../../services/hello/v1/hello_service_pb";
import * as com_language_v1_language_pb from "../../../com/language/v1/language_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IHelloServiceService_IGreet;
}

interface IHelloServiceService_IGreet extends grpc.MethodDefinition<services_hello_v1_hello_service_pb.GreetRequest, services_hello_v1_hello_service_pb.GreetResponse> {
    path: "/services.hello.v1.HelloService/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_hello_v1_hello_service_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<services_hello_v1_hello_service_pb.GreetRequest>;
    responseSerialize: grpc.serialize<services_hello_v1_hello_service_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<services_hello_v1_hello_service_pb.GreetResponse>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer extends grpc.UntypedServiceImplementation {
    greet: grpc.handleUnaryCall<services_hello_v1_hello_service_pb.GreetRequest, services_hello_v1_hello_service_pb.GreetResponse>;
}

export interface IHelloServiceClient {
    greet(request: services_hello_v1_hello_service_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: services_hello_v1_hello_service_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: services_hello_v1_hello_service_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public greet(request: services_hello_v1_hello_service_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: services_hello_v1_hello_service_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: services_hello_v1_hello_service_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_hello_v1_hello_service_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}
