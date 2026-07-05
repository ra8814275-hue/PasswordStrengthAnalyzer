import nmap

target = input("Enter IP address or website: ")

scanner = nmap.PortScanner()

print(f"\nScanning {target}...\n")

scanner.scan(target, arguments="-F")

print("Open Ports:")
for host in scanner.all_hosts():
    print("Host:", host)
    for proto in scanner[host].all_protocols():
        ports = scanner[host][proto].keys()
        for port in ports:
            print(f"Port {port}: {scanner[host][proto][port]['state']}")

with open("report.txt", "w") as report:
    report.write(f"Vulnerability Scan Report\n")
    report.write(f"Target: {target}\n\n")

    for host in scanner.all_hosts():
        for proto in scanner[host].all_protocols():
            ports = scanner[host][proto].keys()
            for port in ports:
                report.write(f"Port {port}: {scanner[host][proto][port]['state']}\n")

print("\nReport saved as report.txt")